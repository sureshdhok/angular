import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  username;
  constructor(private _demo: DemoService) { 
   
  }

  ngOnInit() {

    this._demo.userName.subscribe(res => {
      this.username = res;
      
    })    
    
  }

  updateUserName(uname) {
    this._demo.userName.next(uname.value);
   }
}

