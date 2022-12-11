import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {
user:string="";
   list=[];
  constructor() { }

  ngOnInit() {
  }

  //  addUser(val) {
  // this.list.push(val.value);         //to get the array element
  // val.value="";                     // to get input bar for next entry

  // }


  // remove(i){
  // this.list.splice(i,1);     //this. is used to point given array list[].......splice method used for to delete particular element.
  // }


  addUser(val){
    this.list.push(val.value);
    val.value="";
  }
  

  remove(i){
    this.list.splice(i,1)
  }
 }
