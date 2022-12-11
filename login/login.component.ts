import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DemoService } from '../services/demo.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  msg;

  
  constructor(private notification:NotificationService,   private _router: Router, private _authService : AuthService, private demo:DemoService) { }

  ngOnInit() {
    this.demo.getUsers().subscribe(res=>{
      console.log('from headersinterceptor',res);
      
    })

  }


  login(username: string, password: string) {

    var output = this._authService.checkUserNameandPassword(username, password);
    if(output == true) 
    {
     // this._router.navigate(['/product']);
     this.notification.success('Login successfully.........');
  

    }
    else {
       // this.msg = "Invalid user name and password";
       this.notification.error('Invalid user name and password');
     
    }

  }
 
 
}