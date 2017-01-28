import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RestaurantService {

  apiURL = 'https://stark-river-41252.herokuapp.com/api/restaurants/';

  getRestaurant(id: string) {
    return this.http.get(this.apiURL + id)
      .map((response: Response) => response.json()).toPromise();
  }

  constructor(private http: Http) {

  }

  getRestaurants() {
    return this.http.get(this.apiURL)
      .map((response: Response) => response.json()).toPromise();

    // wrong function
    // return this.http.get('https://stark-river-41252.herokuapp.com/api/restaurants')
    //   .map(function (response: Response){
    //     response.json()
    //   })
    //   .toPromise();
  }

  // getRestaurants() {
  //   return ['Uno', 'Dos', 'Tres'];
  // }
}


// https://stark-river-41252.herokuapp.com/explorer/
