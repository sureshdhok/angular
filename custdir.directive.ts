import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private el:ElementRef,private render:Renderer2) {

    //el.nativeElement.style.border.color="red";
    render.setStyle(el.nativeElement,'color','blue')
   }



}
