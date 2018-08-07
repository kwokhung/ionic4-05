import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(public element: ElementRef, public renderer: Renderer) {
    let nativeElement = this.element.nativeElement;
    renderer.setElementStyle(nativeElement, 'background-color', 'yellow');
    renderer.setElementStyle(nativeElement, 'color', 'blue');
  }

}
