import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getSingleTask();
  }
  getSingleTask(){
    // hardcoded :id
    let observable = this._http.get('/tasks/5d01674801775e373484832b');
    observable.subscribe(data => console.log('Got one task', data);)
  }
  getTasks(){
    // our http response is an observable. store it in the variable tempObserable
    let tempObservable = this._http.get('/tasks');
    // subscribe to out observable and provide the cose we would like to do with our data from the res
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
}
