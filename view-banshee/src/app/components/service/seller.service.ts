import { Injectable } from '@angular/core';
import { Seller } from '../model/seller';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  selectSeller: Seller;
  sellers = {};
  readonly URL_API = 'http://localhost:3000/api/sellers/';
  constructor(private http: HttpClient) {
    this.selectSeller = new Seller();
  }
  /**
   * get all sellers
   */
  getSellers() {
    return this.http.get(this.URL_API);
  }
}
