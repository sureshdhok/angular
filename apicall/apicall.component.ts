import { Component, OnInit } from '@angular/core';
import { Demo1Service } from '../services/demo1.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

   userData:any=[];

  // userData:Users[]=[];
  
  constructor(private demo1:Demo1Service) { }

  ngOnInit() {
     this.demo1.viewData().subscribe((data) =>{
      this.userData=data;
      console.log('from service====>',this.userData);
      
     })





    // this.demo1.viewData().subscribe((data =>{
    //    this.userData=data;
    //    console.log('test data', data)
    //    console.log(this.userData);
    // }))


  }

}
 

  // class Users{
  //     open:string
  //     high:string
  //     low:string
  //     close:string
  //     volume:string
  //   }
