import { Component, OnInit } from '@angular/core';
import { VisitService } from '../service/visit.service';
import { SellerService } from '../service/seller.service';
import { NgForm } from '@angular/forms';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.sass']
})
export class VisitsComponent implements OnInit {

  constructor(private visitService: VisitService, private sellerService: SellerService, private clientService: ClientService) { }

  ngOnInit() {
    this.getAllVisits();
    this.getAllSellers();
    this.getAllClient();
  }

  getAllVisits(){  
    this.visitService.getVisits()
      .subscribe(res=>{
        console.log(res);
        this.visitService.visits = res as [];
      })
  }
  getAllSellers(){
    this.sellerService.getSellers()
      .subscribe(res=>{
        console.log();
        this.sellerService.sellers = res as [];
      })
  }
  getAllClient(){
    this.clientService.getClients()
      .subscribe(res=>{
        console.log();
        this.clientService.clients = res as [];
      })
  }

  selectSeller(id){
    console.log(id);
  }
  formV = true;
  response = false;
  sentVisits(form?: NgForm){
    form.value.clientId = window.localStorage.getItem('id');
    form.value.date = new Date().toDateString();
    var dateVisit = this.visitService.visits.length+1;
    form.value.visitTotal = dateVisit;
    console.log(form.value);   
    this.visitService.createVisit(form.value)
      .subscribe(res => {
        console.log(form.value);
      });
    this.clientService.update({
        "id": parseInt(window.localStorage.getItem('id')),
        "nit": "1234321432",
        "name": "Jhon Villamizar",
        "address": "calle falsa 1123",
        "phone": "555-8797",
        "creditLimit": 1000,
        "availableCredit": 1000,
        "visitPercentage": 3,
        "description": "description",
        "countryId": 1,
        "stateId": 1,
        "cityId": 1,
    })
    this.formV = false;
    this.response = true;
  }

}
