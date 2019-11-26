import { Injectable } from '@angular/core';
import { State } from '../model/state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  selectState: State;
  states = [];
  readonly URL_API = 'http://localhost:3000/api/states/';
  constructor(private http: HttpClient) {
    this.selectState = new State();
  }
  /**
   * get all states
   */
  getStates() {
    return this.http.get(this.URL_API);
  }
  /**
   * get only states with same countryId 
   */
  getByCountry(countryId: number) {
    return this.http.post(this.URL_API+'/getByCountry', countryId);
  }
}
