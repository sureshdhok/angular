import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService) { }

  success(msg){
    this.toastr.success(msg);
  }
  


  error(errormsg){
    this.toastr.error(errormsg);
  }

 
  
}
