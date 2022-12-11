
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   //  @Input() data:string;
   @Input() data:string;
    
  // @Input() data:object;

  //fromchildtoparent='HTML is a HYperText Markup Language';
 // @Output() childOutput:EventEmitter <string>=new EventEmitter();

fromchild='I am from child component';
@Output() childOutput:EventEmitter<string>=new EventEmitter();

  // product:any[]=[
  //   {'id':101, 'name':'Laptop', 'company':'HP', 'price':65000},
  //   {'id':201,'name':'Shoes', 'company':'NIKE', 'price':2000},
  //   {'id':301, 'name':'Mobile', 'company':'VIVO', 'price':20000},
  //   {'id':401, 'name':'TV', 'company':'SONI', 'price':20000},
  //   {'id':501, 'name':'Bike', 'company':'Hero', 'price':85000}
  // ]
    
  // @Output() childOutput:EventEmitter<object>= new EventEmitter();



  constructor() { }

  ngOnInit() {
    //console.log('from parent ==>',this.data);
    //console.log('from parent======',this.data);
    
    
   
    
  
   }

   senddata(){
    //this.childOutput.emit(this.fromchildtoparent);
   // this.childOutput.emit(this.product);

   }

}
