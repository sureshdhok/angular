import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private demo:DemoService) { }

  ngOnInit() {
    
    this.demo.getPosts().subscribe(res=>{
      console.log('from home',res);
      
    })

    this.demo.getAlbums().subscribe(res =>{
      console.log('from homecompo' ,res);
      
    })
  }

}
