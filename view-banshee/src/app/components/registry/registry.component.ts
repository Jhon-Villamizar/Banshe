import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.sass']
})
export class RegistryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formR = true;
  response = false;
  sendNew(){
    this.response = true;
    this.formR = false;
  }

}
