import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { format } from 'url';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
myReactiveForm:FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
      'email': new FormControl(null,Validators.required , this.NaEmails),
      'password':new FormControl(null,Validators.required)

    
      
    })
    
   
  }
 

OnSubmit(){
  console.log(this.myReactiveForm);
  
  this.myReactiveForm.reset()

}

pass(){
  prompt('Enter mobile number')
}

show(){
  alert ("Login Successfully..!")

}

NaEmails(control:FormControl) : Promise <any> | Observable <any> {
  const myResponse= new Promise<any> ((resolve, reject) => {
     if (control.value ==='abc@gmail.com') {
      resolve({'emailNotAllowed':true})
      
     } else {
      resolve(null);
      
     }
  })
   return myResponse;
}

}