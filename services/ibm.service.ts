
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IbmService implements OnInit {

//  url="http://jsonplaceholder.typicode.com/users"

url="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";



  constructor(private httpclient:HttpClient) { }

  ngOnInit() {
 
  }

  //  getData():Observable <any> {
  //    return this.httpclient.get(this.url);  
  //  }


  
  getData(): Observable <any> {
    return this.httpclient.get(this.url)
    
  }

 
  }
     
  




        