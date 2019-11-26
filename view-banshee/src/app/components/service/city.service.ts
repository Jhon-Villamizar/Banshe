import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  selectCity: City;
  cities = [];
  readonly URL_API = 'http://localhost:3000/api/cities/';
  constructor(private http: HttpClient) {
    this.selectCity = new City();
  }
  /**
   * get all cities
   */
  getCities() {
    return this.http.get(this.URL_API);
  }
  /**
   * 
   * @param stateId 
   * get all cities with same stateId
   */
  getByState(stateId: number) {
    return this.http.post(this.URL_API+'/getByState', stateId);
  }
}
