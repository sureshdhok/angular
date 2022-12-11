import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclasshome',
  templateUrl: './ngclasshome.component.html',
  styleUrls: ['./ngclasshome.component.css']
})
export class NgclasshomeComponent implements OnInit {
student: any[] =[
  {'studentId':"123",'name':"Suresh",'Company':"TCS",'department': "Finance",'Salary': "40000"},
  {'studentId':"456",'name':"Rahul",'Company':"Wipro",'department': "IT",'Salary': "56000"},
  {'studentId':"789",'name':"Akash",'Company':"Mahindra",'department': "Marketing",'Salary': "70000"},
  {'studentId':"012",'name':"Sumit",'Company':"Pentagoan",'department': "IT",'Salary': "43000"},
  {'studentId':"345",'name':"Kumar",'Company':"Infosys",'department': "HR",'Salary': "76000"}
]




candidates:any[]=[
  {'id':123,
  'name':'sachin',
    'city':'sangli',
    'fruits':{
      'mango':'red',
      'banana':'yellow',
      'greaps':'green',
      
    }
  }

]
  constructor() { }

  ngOnInit() {
  }

}