import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DemoService } from '../services/demo.service';
// import { DemoService } from '../services/demo.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  nameNotAllowed = ['Codemind', 'Technology']; 
  
  genders = [        
    { id : '1', value: 'Male'},
    {id : '2', value: 'Female'}
  ]
  myReactiveForm: FormGroup;
  
  constructor(private fb:FormBuilder,private demo:DemoService){ 
    this.createForm();
  }

  ngOnInit() {
    this.demo.hello();
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'userDetail' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl(null, Validators.required, this.NaEmails),
      }),
      'gender': new FormControl('Male'),
      'course': new FormControl('Angular'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })

    // this.myReactiveForm = this.fb.group({
    //   userDetail: this.fb.group({
    //     username: ['',[Validators.required,this.NaNames.bind(this)]],
    //     email:['',Validators.required,this.NaEmails]
    //   }),
    //   gender: ['Male'],
    //   course: ['Angular'],
    //   skills: this.fb.array([
               // this.fb.control(null, Validators.required)
           // ])
    //    
     
    // })



    setTimeout(() => {
// this.myReactiveForm.setValue({
//   'userDetails' : {
//   'username' :'ABC',
//   'email' : 'abc@codemindtechnology.com'
// },
// 'gender' : 'Male',
// 'course' : 'HTML',
// 'skills' : [
//   'UI Developer'
// ]
// })
//     }, 5000)
      this.myReactiveForm.patchValue({
        userDetail : {
          username: 'ABC'
        }
      })
    }, 3000)
  }

  OnSubmit() {
    console.log(this.myReactiveForm);
  }

  OnAddSkills() {
    const control = new FormControl(null) ;
   (<FormArray>this.myReactiveForm.get('skills')).push(control);

   // OR  //
//  const control = new  FormControl(null) ;
//  this.demoArray.push(control);
//   }

   //  OR  //
// get demoArray(){
//   return this.myReactiveForm.get('skills') as FormArray;
}

Remove(i) {
  const control= new FormControl(null);
  (<FormArray>this.myReactiveForm.get('skills')).removeAt(i);
}

  NaNames(control: FormControl) {
    if (this.nameNotAllowed.indexOf(control.value) !== -1) {
      return {'nameNotAllowed': true}
    }
    return null;
   }

   
   NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 0)
    })
    return myResponse;
   }



  }

  