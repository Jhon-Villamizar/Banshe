import { Component, OnInit } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.getSellers();
  }
  login = true;
  home = false;

  getSellers() {
    this.sellerService.getSellers()
      .subscribe(res => {
        this.sellerService.sellers = res as {};
      })
  }

  sendLogin(form?: NgForm) {
    var datos = this.sellerService.sellers.data;
    console.log(datos);
    
    datos.forEach(element => {
      if (element.name == form.value.name && element.cc == form.value.cc) {
        this.login = false;
        this.home = true;
        if (form) {
          form.reset();
        }
      } else {
        if (form) {
          form.reset();
        }
      }
    });
  }

}
