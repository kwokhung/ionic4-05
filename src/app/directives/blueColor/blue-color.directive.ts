import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective implements OnInit {

  nativeElement: any;

  constructor(public element: ElementRef, public renderer: Renderer) {
    this.nativeElement = this.element.nativeElement;
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.nativeElement, 'background-color', 'cyan');
    this.renderer.setElementStyle(this.nativeElement, 'color', 'blue');
  }

}
