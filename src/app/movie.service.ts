import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/do';  // debug

import { Subject } from 'rxjs/Subject';




@Injectable()
export class MovieService {
    headers: Headers;
    options: RequestOptions;


    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }


    getMovies() {
        return this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=5de339ee88941d862165471adf9d5473&page=1', this.options)
            .map((res: Response) => {
                console.log('response recieved', res);
                return res.json();

            }).catch(this.handleError);
        // .do(data => console.log('server data:', data))  // debug
    }


    handleError(error: any) {
        console.log('res', error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
