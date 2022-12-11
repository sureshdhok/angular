import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-templatePractice',
  templateUrl: './templatePractice.component.html',
  styleUrls: ['./templatePractice.component.css']
})
export class templatePracticeComponent implements OnInit {
  username:string='';
defaultValue='Angular';

genders =[
  {id:'1' ,value:'Male'},
  {id:'2' ,value:'Female'}
]
defaultGender= 'Female';

formData ={
  username:'',
  email:'',
  mobile:'',
  city:'',
  country:'',
  state:'',
  course:'',
  gender:'',
}

  constructor() { }

  ngOnInit() {
  }
 

  OnSubmit(form:NgForm) {
    
    // console.log(form);
    this.formData.username=form.value.userDetail.username;
    this.formData.email=form.value.userDetail.email;
    this.formData.mobile=form.value.userDetail.mobile;
    this.formData.city=form.value.userDetail.city;
    this.formData.country=form.value.userDetail.country;
    this.formData.state=form.value.userDetail.state;
    this.formData.course=form.value.course;
    this.formData.gender=form.value.gender;

     form.reset();

     form.controls['gender'].setValue('Female');
     form.controls['course'].setValue('Angular')

  }
  data:boolean=false;
  show () {
    this.data=true;
  }

}