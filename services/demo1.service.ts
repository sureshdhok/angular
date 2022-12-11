import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Demo1Service implements OnInit{

  apiUrl:string ="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
  
  // API_2='S117QBQMO9JK24P2';

  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
 
  }
   viewData() : Observable <any> {
   return this.httpclient.get(this.apiUrl);


  //  const headers = new HttpHeaders() ;
  //  headers.set('API_2', this.API_2);

  //  return this.httpclient.get(this.apiUrl,{headers});
    }
     



}
