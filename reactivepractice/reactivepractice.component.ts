import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivepractice',
  templateUrl: './reactivepractice.component.html',
  styleUrls: ['./reactivepractice.component.css']
})
export class ReactivepracticeComponent implements OnInit {
  myReactiveForm: FormGroup;

  notAllowedNames=['Suresh','Kumar'];

  genders = [
    {id:'1' ,value:'Male'},
    {id:'2' ,value:'Female'}
  ]


  constructor() { 
    this.createForm();
    
  }



  ngOnInit(): void {
  }

createForm() {
  this.myReactiveForm= new FormGroup ({
    'userDetail':new FormGroup ({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),  
    }),
   
    'mobile':new FormControl(null,Validators.required),
    'gender':new FormControl(null),
    'date':new FormControl(null),
    'password': new FormControl(null, Validators.required),
    'confirmPassword': new FormControl(null, Validators.required)
    
  },this.passwordMatchingValidator)
}



OnSubmit(){
  console.log(this.myReactiveForm.value);
  
}

// used to past dates blur or it will cannot show
minDate:any="2022-09-29";

// NaNames(cotrol:FormControl){
//   if (condition) {
    
//   }
// }

passwordMatchingValidator(control:FormControl):{[key:string]:boolean} | null {
  if (control.get('password').value===control.get('confirmPassword').value) {
    return null;
    
  }
  return {notmatched:true};
}
  





  }
    
 

  

