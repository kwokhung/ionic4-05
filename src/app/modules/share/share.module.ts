import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from '../../components/hello/hello.component';
import { BlueColorDirective } from '../../directives/blueColor/blue-color.directive';
import { ToThePowerPipe } from '../../pipes/toThePower/to-the-power.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelloComponent, BlueColorDirective, ToThePowerPipe
  ],
  exports: [
    HelloComponent
  ]
})
export class ShareModule { }
