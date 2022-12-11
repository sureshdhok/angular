import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  name:string="Angular Developer";
  imageUrl = 'https://www.zup.com.br/wp-content/uploads/2021/03/5e32dc5538c14b0d4b28f87f_imagens-angular3.png';
  defination:string="Suresh Bhauso Dhok";

  constructor(private demo:DemoService) { }

  ngOnInit() {
    this.demo.getPosts().subscribe((data => {
      console.log('from comp2', data);
     }))
  
  }

  show() {
    alert('Codemind Technology')
  }

}
