import { Component, OnInit } from '@angular/core';
// import {RestaurantComponent} from '../restaurant/restaurant.component';
import {SaucerService} from './saucers.service';

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css'],
  providers: [SaucerService]
})
export class SaucersComponent implements OnInit {

  restaurant = {};
  saucers = [];

  constructor(private saucerService: SaucerService) { }

  ngOnInit() {

    let restaurantId = '58866b06eaa0c200046f5e6e';

    this.saucerService.getSaucer(restaurantId).then(response => {
      console.log('saucers: ' + response);

      this.saucers = response;

    });

    // this.saucerService.getSaucer(restaurantId).then(response => {
    //   console.log('saucers: ' + response);
    //
    //   this.saucers = response;
    // });
  }

}
