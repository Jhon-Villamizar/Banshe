import { Injectable } from '@angular/core';
import { Visit } from '../model/visit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  selectVisit: Visit;
  visits = [];
  readonly URL_API = 'http://localhost:3000/api/visits/';
  constructor(private http: HttpClient) {
    this.selectVisit = new Visit();
  }

  /**
   * @param clientId 
   * get all visits by client
   */
  getByClient(clientId: number) {
      return this.http.post(this.URL_API + 'getByClient',clientId);
  }
  /**
   * metodo que crea nuevos usuarios
   * @param visit
   */
  createVisit(visit: Visit) {
      return this.http.post(this.URL_API, visit);
  }
}
