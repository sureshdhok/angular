import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchhome',
  templateUrl: './ngswitchhome.component.html',
  styleUrls: ['./ngswitchhome.component.css']
})
export class NgswitchhomeComponent implements OnInit {
  selectedDepartment: string;
  constructor() { }

  ngOnInit() {
  }
   getDepartmentValue(value){
    console.log(value.target.value);
    this.selectedDepartment=value.target.value;
   }
}
