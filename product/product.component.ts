import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  removeAt: LaptopComponent;

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
    this._router.navigate(['login']);
  }
}
