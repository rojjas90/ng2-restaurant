import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {RestaurantService} from '../restaurant/restaurant.service';
import {SaucerService} from './saucers.service';

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css'],
  providers: [SaucerService, RestaurantService]
})
export class SaucersComponent implements OnInit {

  restaurant = {};
  saucers = [];

  constructor(private saucerService: SaucerService,
    private restaurantService: RestaurantService) { }

  ngOnInit() {

    let restaurantId = '58866b06eaa0c200046f5e6e';

    this.saucerService.getSaucer(restaurantId).then(response => {
      console.log('saucers: ' + response);

      this.saucers = response;

    });

    this.restaurantService.getRestaurant(restaurantId).then(response => {
      console.log('saucers: ' + response);

      this.restaurant = response;

    });

    // this.saucerService.getSaucer(restaurantId).then(response => {
    //   console.log('saucers: ' + response);
    //
    //   this.saucers = response;
    // });
  }

}
