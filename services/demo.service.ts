import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpClient:HttpClient ) {}


  firebaseUrl="https://angularcrudedemo-default-rtdb.firebaseio.com/"

  createPost() {
    let postData = {
      titile : "This is angular crud ",
      content : "Welcome to firebase angular crud app"
    }
    
   return this.httpClient.post(this.firebaseUrl + 'posts.json', postData);
  }


createPost1(){
   let student={
    id:1,
    name:'Suresh',
    collage:'FTC',
    city:'Sangli',
    pincode:415315

   }
  return this.httpClient.post(this.firebaseUrl + 'posts.json', student);
  }


  getPostData() {
    let postData = {
      titile : "This is angular crud ",
      content : "Welcome to firebase angular crud app"
    }
    
   return this.httpClient.get(this.firebaseUrl + 'posts.json');
  }






  // userName = new Subject<any>();
   userName = new BehaviorSubject('CodemindTechnology');
 
 id=new Subject<any>();
 name=new Subject<any>();
 model=new Subject<any>();
 price=new Subject<any>();   



  product = [
    {name: 'Laptop', id: '101'},
    {name: 'Mobile', id: '102'},
    {name: 'TV', id: '103'}
  ]
  



  
  hello() {
    alert('I am form Demoservice');
  }

  getUsers(): Observable<any> {
    const authtoken = localStorage.getItem('token');
    return this.httpClient.get(`${devAPIUrl}users`, {headers:new HttpHeaders({'content-type':'application/json'})});
   }
   getPosts(): Observable<any> {
    const authtoken =localStorage.getItem('token');
     return this.httpClient.get(`${devAPIUrl}posts`,{headers:new HttpHeaders({'content-type':'application/currency'})});
   }


   getAlbums(): Observable<any> {
    const authtoken=localStorage.getItem('token')
    return this.httpClient.get(`${devAPIUrl}albums`,{headers:new HttpHeaders ({'content-type':'application/digitout'})})
   }
 
  //  createPost(post): Observable<any> {
  //   let endPoints = "posts";
  //   return this.httpClient.post<any>(`${devAPIUrl+ endPoints}`, JSON.stringify(post) , {headers:new HttpHeaders({'content-type':'application/json'})});
  // }



  
}


