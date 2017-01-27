import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RestaurantService {
  getRestaurant(id: number) {

  }

  constructor(private http: Http) {

  }

  getRestaurants() {
    return this.http.get('https://stark-river-41252.herokuapp.com/api/restaurants')
      .map((response: Response) => response.json()).toPromise();
  }

  // getRestaurants() {
  //   return ['Uno', 'Dos', 'Tres'];
  // }
}
