import { Component, OnInit } from '@angular/core';
import { Demo2Service } from '../services/demo2.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']     
})
export class UserComponent implements OnInit {
   users:user[]=[];


  constructor(private demo2:Demo2Service) { }

  ngOnInit() {
    this.demo2.Users().subscribe((data => {
      this.users= data
     }))

   
  }  


}
  class user {
    id:number;
    name:string;
    username:string;
    email:string;
    website:string;
}







  
  

