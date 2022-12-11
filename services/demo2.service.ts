
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Demo2Service implements OnInit {

  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {

  }
         
  Users(): Observable <any> {
    return this.httpClient.get(`${devAPIUrl}users`);
   }




  }