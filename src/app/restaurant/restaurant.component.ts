import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants = [];

  constructor() { }

  ngOnInit() {
    this.restaurants = ["Uno", "dos"];
  }

}
