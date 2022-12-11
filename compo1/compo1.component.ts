import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  username;
  constructor(private _demo: DemoService) { 
   
  }
  ngOnInit(): void {
   // this.show();
   this._demo.userName.subscribe(res => {
    this.username = res;
    
  })

   this._demo.getPosts().subscribe((data => {
    console.log('from comp2', data);
   }))

  //  this._demo.createPost("This is new post from comp2").subscribe((data => {
  //   console.log(data);
  //  }))
  }

  updateUserName(uname) {
    this._demo.userName.next(uname.value);
   }
}
