import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  selectClient: Client;
  clients = [];
  readonly URL_API = 'http://localhost:3000/api/clients/';
  constructor(private http: HttpClient) {
    this.selectClient = new Client();
  }
    /**
     * get all clients
     */
  getClients() {
    return this.http.get(this.URL_API);
  }
  /**
   * get all visits with same client
   * @param id 
   */
  getOne(id: number) {
    return this.http.post(this.URL_API+'/read', id);
  }
  /**
   * create new client
   * @param client
   */
  createClient(client: Client) {
      return this.http.post(this.URL_API+'/create', client);
  }
}
