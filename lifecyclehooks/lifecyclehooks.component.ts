import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input , OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnChanges,DoCheck ,AfterContentInit ,AfterContentChecked ,AfterViewInit ,AfterViewChecked, OnDestroy {
  
  num:number=1;
@ViewChild("child", {static:false}) appcomponent:AppComponent
  @Input () data: string;
 
  
  constructor() {
    console.log("constructor called");
   }
  ngOnDestroy(): void {
    console.log('OnDestory called');
  }
 

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.');
  }

  ngOnInit() {

    console.log("ngOnInit called");

   
  }

  ngOnChanges(chnages: SimpleChanges): void {
    console.log("ngOnChanges called" , chnages);

  
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

}
