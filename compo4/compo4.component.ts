import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-compo4',
  templateUrl: './compo4.component.html',
  styleUrls: ['./compo4.component.css']
})
export class Compo4Component implements OnInit {

  username:string="";
  constructor(private _demo: DemoService) { 
   
  }

  ngOnInit() {

    this._demo.userName.subscribe(res => {
      this.username = res;
      console.log('from service', this.username);
    })
    
  }

  updateUserName(uname) {
    this._demo.userName.next(uname.value);
   }
}