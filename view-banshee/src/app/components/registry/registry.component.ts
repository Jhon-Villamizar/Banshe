import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConutryService } from '../service/conutry.service';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.sass']
})
export class RegistryComponent implements OnInit {

  constructor(private countryService: ConutryService, private stateService: StateService) { }

  ngOnInit() {
    this.getAllContries()
  }

  getAllContries(){
    this.countryService.getCountries()
      .subscribe(res=>{
        console.log(res);
        
        this.countryService.countries = res as [];
      })
  }
  
  formR = true;
  response = false;
  sendNew(){
    this.response = true;
    this.formR = false;
  }

}
