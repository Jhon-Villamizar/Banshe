import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.sass']
})
export class VisitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formV = true;
  response = false;

  sendUpdate(){
    this.formV = false;
    this.response = true;
  }

}
