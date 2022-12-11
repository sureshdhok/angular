import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';


@Component({
  selector: 'app-compo6',
  templateUrl: './compo6.component.html',
  styleUrls: ['./compo6.component.css']
})
export class Compo6Component implements OnInit {
  
  productname = {
    id:'',
    name: '',
    model: '',
    price:''

  }
  
  constructor(private demo:DemoService) { }

  ngOnInit() {
    this.demo.id.subscribe (res =>{
      this.productname.id=res;
    })
   
    this.demo.name.subscribe (res =>{
      this.productname.name=res;
    })

    this.demo.model.subscribe (res =>{
      this.productname.model=res;
    })

    this.demo.price.subscribe (res =>{
      this.productname.price=res;
    })
    
  }
  
  
  UpdateProductValue(val,arr,uname,uprice) {
      this.demo.id.next(val.value);
      this.demo.name.next(arr.value);
      this.demo.model.next(uname.value);
      this.demo.price.next(uprice.value);
     }


  
}
