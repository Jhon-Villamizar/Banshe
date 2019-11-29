import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { VisitService } from '../service/visit.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private clientSevice: ClientService,private visitService: VisitService) { }

  ngOnInit() {
    this.getClients();
    this.getAllVisits();
    
  }

  filterClient = '';

  getClients() {
    this.clientSevice.getClients()
      .subscribe(res => {
        console.log(res);
        this.clientSevice.clients = res as [];
      })
  }
  totalVisits:any;
  getAllVisits(){  
    this.visitService.getVisits()
      .subscribe(res=>{
        this.totalVisits = Object.keys(res).length;
        window.localStorage.setItem('totalVisits', this.totalVisits);
        this.visitService.visits = res as [];
      }) 
  }
  registry = false;
  visits = false;
  table = true;
  details = false;
  newClient(){
    this.getClients();
    this.getAllVisits();
    this.table = false;
    this.registry = true;
    document.getElementById('clientDetails').innerHTML = ``;
    this.visits = false;
    
  }
  newDetails(id){
    this.getClients();
    this.getAllVisits();
    this.table = false;
    this.details = true;
    var element = [];
    console.log(id);
    var clients = this.clientSevice.clients;
    clients.forEach(element => {
      if(element.id == id){  
        console.log(element);
        document.getElementById('clientDetails').innerHTML = `
          <div class="card mt-2" style="box-shadow: 0px 0px 11px 1px rgba(162, 162, 162, 0.18)">
          <h5 class="card-header">Clieints Details</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">id:</p>
                <h6>${element.id}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">nit:</p>
                <h6>${element.nit}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">name:</p>
                <h6>${element.name}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">address:</p>
                <h6>${element.address}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">address:</p>
                <h6>${element.phone}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">creditLimit:</p>
                <h6>${element.creditLimit}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">availableCredit:</p>
                <h6>${element.availableCredit}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">cityId:</p>
                <h6>${element.cityId}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">countryId:</p>
                <h6>${element.countryId}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">stateId:</p>
                <h6>${element.stateId}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">visitPercentage:</p>
                <h6>${element.visitPercentage}</h6>
              </div>
              <div class="col-md-3 mb-4">
                <p style="margin-bottom:0">description:</p>
                <h6>${element.description}</h6>
              </div>
          </div>
        </div>
      `
      }
    });
  }

  home(){
    this.getClients();
    this.getAllVisits();
    document.getElementById('clientDetails').innerHTML = ``;
    this.table = true;
    this.registry = false;
    this.visits = false;
  }
  newVisit(id){
    this.getClients();
    this.getAllVisits();
    console.log(id);
    window.localStorage.setItem('id', id);
    var visitById = this.visitService.visits;
    var conunting=0;
    visitById.forEach(element => {
      if (element.clientId == id) {
        conunting++;
      } 
    })
    var y = parseInt(this.totalVisits);
    var porcentage = (conunting/y)*100;
    var porcentageS = String(porcentage);
    console.log('% => ',porcentageS);
    localStorage.setItem('porcentageS',porcentageS)
    // localStorage.setItem('conunting',conunting);
    console.log('conteo => ',conunting);
    console.log('visitTotal => ',this.totalVisits);
    
    this.visits = true;
    this.table = false;
  }

}
