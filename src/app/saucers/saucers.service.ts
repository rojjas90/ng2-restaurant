import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SaucerService {

  apiURL = 'https://stark-river-41252.herokuapp.com/api/';

  constructor(private http: Http) { }

  getSaucer(restaurantId: string) {
    return this.http.get(this.apiURL + 'restaurants/' + restaurantId + '/saucers')
      .map((response: Response) => response.json()).toPromise();
  }

  getSaucers(saucerId: string) {
    return this.http.get(this.apiURL + 'saucers/' + saucerId)
      .map((response: Response) => response.json()).toPromise();
  }

}


// https://stark-river-41252.herokuapp.com/explorer/
