import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class HeadersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log('from HeadersInterceptor', req);
    const API_KEY = 'codemind123';
     const API_KEY1='12345';
     const API_KEY2='codemind technology';
    const request = req.clone({
        setHeaders: {
            API_KEY,
             API_KEY1,
             API_KEY2
        } 

    })
    return next.handle(request);

  }
   
}

