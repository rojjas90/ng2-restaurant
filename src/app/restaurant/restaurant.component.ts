import { Component, OnInit } from '@angular/core';
import {  RestaurantService} from "./restaurant.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {

  restaurants = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    // this.restaurants = ["Uno", "dos"];
    // this.restaurants = this.restaurantService.getRestaurants();

    this.restaurantService.getRestaurants().then(response => {
      this.restaurants = response;
    });
  }

}
