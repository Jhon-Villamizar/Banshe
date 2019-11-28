import { Component, OnInit } from '@angular/core';
import { VisitService } from '../service/visit.service';
import { SellerService } from '../service/seller.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.sass']
})
export class VisitsComponent implements OnInit {

  constructor(private visitService: VisitService, private sellerService: SellerService) { }

  ngOnInit() {
    this.getAllVisits();
    this.getAllSellers();
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

  selectSeller(id){
    console.log(id);
  }
  formV = true;
  response = false;
  sentVisits(form?: NgForm){
    form.value.clientId = window.localStorage.getItem('id');
    form.value.date = new Date().toDateString();
    var dateVisit = this.visitService.visits.length;
    form.value.visitTotal = dateVisit;
    console.log(form.value);   
    // this.visitService.createVisit(form.value)
    //   .subscribe(res => {
    //     console.log(form.value);
    //   });
    this.formV = false;
    this.response = true;
  }

}
