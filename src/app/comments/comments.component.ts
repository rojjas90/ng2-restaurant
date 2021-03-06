import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {RestaurantService} from '../restaurant/restaurant.service';
import {Restaurant} from '../restaurant/restaurant';
import {SaucerService} from '../saucers/saucers.service';
import {CommentService} from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [SaucerService, CommentService, RestaurantService]
})
export class CommentsComponent implements OnInit, OnDestroy {

  restaurantId = '';
  // restaurant = {};
  restaurant: Restaurant;
  saucerId = '';
  saucer = {};
  private subscription: Subscription;
  comments = [];
  data = {};

  commentSuccess: Boolean;
  commentError: Boolean;

  constructor(
    private route: ActivatedRoute,
    private saucerService: SaucerService,
    private commentService: CommentService,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        console.log('Params:', params);
        this.restaurantId = params.restaurantId;
        this.saucerId = params.saucerId;


        this.restaurantService.getRestaurant(this.restaurantId).then(
          response => this.restaurant = response
        );

        this.saucerService.getSaucer(this.restaurantId).then(
          response => this.saucer = response
        );

        this.commentService.getComments(this.saucerId).then(
          response => this.comments = response
        );

      }
    );
  }

  sendComment() {
    this.commentService.addComment(this.saucerId, this.data).
      then(response => {
        this.comments.push(response);
        console.log('Datos enviados');

        this.commentSuccess = true;
        this.commentError = false;

        this.data = {};
      })
      .catch(response => {
        this.commentSuccess = false;
        this.commentError = true;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
