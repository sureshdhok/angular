import { Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit,OnDestroy {
  presentDate = new Date();
  name = "codemind";
  price = 10000;
  myObservable: any;
  jsonData={id:'one' ,name:'Codemind'}
  digits:number=100;
 namesearch:string='';

 
 productArr:any[]=[
  {
  sno:1,
  name:'mobile',
  price:18000,
  avaibility:'Available'
  },

  {
    sno:2,
    name:'Tv',
    price:15000,
    avaibility:'Not Available'

  },

  {
    sno:3,
    name:'Washing Machine',
    price:130000,
    avaibility:'Available'
  },

  {
      sno:4,
      name:'Tab',
      price:39000,
      avaibility:'Available'
  }

 ]

  constructor() { 
  }
  
  ngOnDestroy(): void {
  }

  ngOnInit() {
  //   console.log(this.presentDate);
   this.myObservable = of('This is my custom observable').pipe(delay(3000));

  }


  newProduct= { sno:"",name:"", price:"",avaibility:"" };
 
  addProduct() {
      this.productArr.push(this.newProduct)
     
  }
 
}
