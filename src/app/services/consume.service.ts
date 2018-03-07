import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConsumeService {

    private _url: string = 'http://api.icndb.com/jokes/random';
    constructor(private _http: HttpClient) {}

    getCities() {
        return this._http
            .get(this._url, {responseType: 'json'})
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json() || 'Server error');
    }
}
