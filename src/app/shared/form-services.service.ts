import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class FormServicesService {

  constructor(private http: Http) { }

  private _mentorURL1 = 'assets/mock-data/mentorRegForm.json';
  getMentorRegFields(): Observable<any> {
    return this.http
      .get(this._mentorURL1)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

