import { Component, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  nativeElement: any;

  constructor(private element: ElementRef, private renderer: Renderer) {    
    this.nativeElement = this.element.nativeElement;
  }

  ngOnInit() {
    this.renderer.setElementStyle(this.nativeElement, 'font-style', 'italic');
  }

}
