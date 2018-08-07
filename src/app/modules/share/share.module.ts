import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from '../../components/hello/hello.component';
import { BlueColorDirective } from '../../directives/blueColor/blue-color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelloComponent, BlueColorDirective
  ],
  exports: [
    HelloComponent
  ]
})
export class ShareModule { }
