import { Component, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer) {    
    let nativeElement = this.element.nativeElement;
    renderer.setElementStyle(nativeElement, "color", "blue");
  }

  ngOnInit() {
  }

}
