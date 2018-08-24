import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  element: ElementRef;
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color="blue";
    el.nativeElement.style.backgroundColor="lightgray";
    el.nativeElement.style.padding="5px";
    el.nativeElement.style.width="375px";
    this.element=el;
  }
  ngOnInit(){
    this.element.nativeElement.innerText +=" - rendered by appCustom";
  }

}
