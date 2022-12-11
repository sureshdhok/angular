import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpletemplate',
  templateUrl: './simpletemplate.component.html',
  styleUrls: ['./simpletemplate.component.css']
})
export class SimpletemplateComponent implements OnInit {
defaultValue:string="Angular"
userName:string="";

// selectedEmail:string="abc@codemindtechnology.com";

genders = [
  { id : '1', value: 'Male'},
  {id : '2', value: 'Female'}
]

defaultGender = 'Female';

formData = {
  username: '',
  email: '',
  course: '',
  gender: ''
}


  constructor() { }

  ngOnInit() {
  
   
  }

  OnSubmit(form:NgForm) {
    
     console.log(form);
    
    this.formData.username = form.value.userDetail.username ;
    this.formData.email = form.value.userDetail.email;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;
  
     form.reset();

    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Female');

    
  }

data:boolean=false;
  show(){
  this.data=true;
  }
}
