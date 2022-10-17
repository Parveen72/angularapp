import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(private el:ElementRef,private render:Renderer2) { 
    render.setStyle(el.nativeElement,'backgoundcolor','gray');
  }

}
