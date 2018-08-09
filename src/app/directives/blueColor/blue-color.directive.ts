import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(public element: ElementRef, public renderer: Renderer) {
    let nativeElement = this.element.nativeElement;
    this.renderer.setElementStyle(nativeElement, 'background-color', 'yellow');
    this.renderer.setElementStyle(nativeElement, 'color', 'blue');
  }

}
