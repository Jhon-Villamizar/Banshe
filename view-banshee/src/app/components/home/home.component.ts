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

  filterClient = '';

  getClients() {
    this.clientSevice.getClients()
      .subscribe(res => {
        console.log(res);
        this.clientSevice.clients = res as [];
      })
  }
  registry = false;
  visits = false;
  table = true;
  details = false;
  newClient(id){
    this.table = false;
    this.details = true;
    var element = [];
    console.log(id);
    var clients = this.clientSevice.clients;
    clients.forEach(element => {
      if(element.id == id){
        console.log(element);
        document.getElementById('clientDetails').innerHTML = `
          <div class="card">
          <h5 class="card-header">Clieints Details</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 mb-4">
                <p>address:</p>
                <h6>${element.address}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>availableCredit:</p>
                <h6>${element.availableCredit}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>cityId:</p>
                <h6>${element.cityId}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>countryId:</p>
                <h6>${element.countryId}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>Date:</p>
                <h6>${element.createdAt}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>creditLimit:</p>
                <h6>${element.creditLimit}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>description:</p>
                <h6>${element.description}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>id:</p>
                <h6>${element.id}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>name:</p>
                <h6>${element.name}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>nit:</p>
                <h6>${element.nit}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>phone:</p>
                <h6>${element.phone}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>stateId:</p>
                <h6>${element.stateId}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p>visitPercentage:</p>
                <h6>${element.visitPercentage}</h6>
              </div>
          </div>
        </div>
      `
      }
    });
  }

  home(){
    document.getElementById('clientDetails').innerHTML = ``;
    this.table = true;
    this.registry = false;
    this.visits = false;
  }
  newVisit(id){
    console.log(id);
    window.localStorage.setItem('id', id);
    this.visits = true;
    this.table = false;
  }

}
