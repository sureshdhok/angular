import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.css']
})
export class Compo3Component implements OnInit {
  username;
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