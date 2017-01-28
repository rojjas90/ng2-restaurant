import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CommentService {
  data = {};
  apiURL = 'https://stark-river-41252.herokuapp.com/api/saucers/';
  constructor(private http: Http) { }

  getComments(saucerId: string) {
    return this.http.get(this.apiURL + saucerId + '/comments')
      .map((response: Response) => response.json()).toPromise();
  }

  addComment(saucerId: string, data) {
    data.date = new Date().toUTCString();

    let body = JSON.stringify(data);

    return this.http.post(this.apiURL + saucerId + '/comments', data)
      .map((response: Response) => response.json()).toPromise();
  }

  //
  // sendComment(saucerId: string, data) {
  //   return this.http.get(this.apiURL + saucerId + '/comments')
  //     .map((response: Response) => response.json()).toPromise();
  // }

}


// https://stark-river-41252.herokuapp.com/explorer/
