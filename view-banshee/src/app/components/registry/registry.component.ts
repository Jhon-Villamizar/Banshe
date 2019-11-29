import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConutryService } from '../service/conutry.service';
import { StateService } from '../service/state.service';
import { CityService } from '../service/city.service';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.sass']
})
export class RegistryComponent implements OnInit {

  constructor(private clientService: ClientService, private countryService: ConutryService, private stateService: StateService, private cityService: CityService) { }

  ngOnInit() {
    this.getAllContries();
    this.getAllStates();
    this.getAllCities();
  }

  getAllContries(){  
    this.countryService.getCountries()
      .subscribe(res=>{
        // console.log(res);
        this.countryService.countries = res as [];
      })
  }
  getAllStates(){
    this.stateService.getStates()
      .subscribe(res=>{
        // console.log(res);
        this.stateService.states = res as [];
      })
  }
  getAllCities(){

    this.cityService.getCities()
      .subscribe(res=>{
        // console.log(res);
        this.cityService.cities = res as [];
      })
  }
  selectCountry(id) {
    document.getElementById('stateId').innerHTML=`<option selected>Select State</option>`;
    document.getElementById('cityId').innerHTML=`<option selected>Select City</option>`;
    var dataS = this.stateService.states;
    dataS.forEach(element => {
      if (element.countryId == id) {
        console.log(element);
        document.getElementById('stateId').innerHTML+=`<option value="${element.id}">${element.name}</option>`;
      }
    });
  }

  selectState(id) {    
    console.log(id);
    document.getElementById('cityId').innerHTML=`<option selected>Select City</option>`;
    var dataC = this.cityService.cities;
    dataC.forEach(element => {
      if (element.stateId == id) {
        console.log(element);
        document.getElementById('cityId').innerHTML+=`<option value="${element.id}">${element.name}</option>`;
      }
    });

  }
  selectCity(id) {
    console.log(id);
  }
  
  formR = true;
  response = false;
  sendRegistry(form?: NgForm){
    // this.response = true;
    // this.formR = false;
    form.value.visitPercentage = parseInt(localStorage.getItem('porcentageS'));
    console.log(form.value);
    // this.clientService.createClient(form.value)
    //   .subscribe(res => {
    //     console.log(form.value);
    //   });
  }
   
}
