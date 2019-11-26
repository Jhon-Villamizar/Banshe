import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConutryService {
  selectCountry: Country;
  countries = {};
  readonly URL_API = 'http://localhost:3000/api/countries/';
  constructor(private http: HttpClient) {
    this.selectCountry = new Country();
  }
    /**
     * get all countries
     */
  getCountries() {
    return this.http.get(this.URL_API);
  }
}
