import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpletemplatehome',
  templateUrl: './simpletemplatehome.component.html',
  styleUrls: ['./simpletemplatehome.component.css']
})
export class SimpletemplatehomeComponent implements OnInit {
selectedValue:string="JavaScript";
course:any[] = [
  {'course':"Angular"},
  {'course':"JavaScript"},
  {'course':"HTML"}
]

name:string="Suresh";
  constructor() { }

  ngOnInit() {
  }

  
  OnSubmit(form:NgForm){
  
    console.log(form.value.userDetail.firstName);
    console.log(form.value.userDetail.lastName);
    console.log(form.value.userDetail.mobileNumber);
    console.log(form.value.userDetail.state);
    console.log(form.value.userDetail.city)

    console.log(form.value.Course);
    
  
  }
}
