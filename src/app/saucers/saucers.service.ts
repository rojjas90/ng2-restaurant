import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SaucerService {

  apiURL = 'https://stark-river-41252.herokuapp.com/api/restaurants/';

  constructor(private http: Http) { }

  getSaucer(id: string) {
    return this.http.get(this.apiURL + id + '/saucers')
      .map((response: Response) => response.json()).toPromise();
  }

}


// https://stark-river-41252.herokuapp.com/explorer/
