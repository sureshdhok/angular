import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products={};
  editForm: any;
  fb: any;
  getFriends: any;
  modalService: any;

  constructor(private demo:DemoService ){
  
  
  }

  // createPost(input:HTMLInputElement){
  //   let post = { title : input.value};
  //   this.demo.createPost(post).subscribe((res: any) => {
  //     console.log('createPost', res);
  //   })
  //     }
    
  ngOnInit(): void {   
             
   





    // this.demo.hello();
    
  //  this.demo.getPostData().pipe(
  //   map( responseData => {
  //     const postArray = [] ;
  //     for (const key in responseData) {
  //       if (responseData.hasOwnProperty(key)) {
         
  //         postArray.push({...responseData[key], id : key});
          
  //       }
  //     }
  //     return postArray;
  //   })
  // ).subscribe( posts => {
  //   console.log('test firebase', posts);
  // })

}


      
  // createPost() {
  //   this.demo.createPost().subscribe(responseData => {
  //    console.log(responseData);
  //   })
  // }
    
  // createPost1(){
  //   this.demo.createPost1().subscribe(data =>{
  //     console.log(data);
      
  //   })
  // }

  
 
  condition:boolean = false;

  title = 'angularapp';
  //fromparenttochild='TypeScript is a superset of JavaScript';
 fromparenttochild='I am from parent component';
 
   value:string;

  // employee:any[]=[
  //   {'id':111 ,'name':'sachin','dept':'HR','company':'Wipro','salary':52000 },
  //   {'id':222, 'name':'kiran', 'dept':'Finance', 'company':'Cognigent', 'salary':64000},
  //   {'id':333, 'name':'sandhya', 'dept':'IT', 'company':'Tech mahindra', 'salary':74000},
  //   {'id':444, 'name':'kumar', 'dept':'HR', 'company':'Capagemini', 'salary':65000},
  //   {'id':555, 'name':'sureh', 'dept':'IT', 'company':'Capagemini', 'salary':55000}
  // ]




//  GetValueFromChild(value){
//   console.log('from child==>',value);
  
//  }



// submitValue(val){
//   this.value=val.value;
// }


OnDestory() {
  this.isShow = false;
}
isShow:boolean = true;


 
}
  


