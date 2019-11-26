import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private clientSevice: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientSevice.getClients()
      .subscribe(res => {
        console.log(res);
        
        this.clientSevice.clients = res as {};
      })
  }

  
  registry = false;
  visits = false;
  tabla = true;
  newClient(){
    console.log();
    console.log('new client');
    this.tabla = false;
    this.registry = true;
    
  }
  home(){
    this.tabla = true;
    this.registry = false;
    this.visits = false;
  }
  newVisit(){
    console.log('new visit');
    this.visits = true;
    this.tabla = false;
  }

}
