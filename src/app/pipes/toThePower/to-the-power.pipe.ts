import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toThePower'
})
export class ToThePowerPipe implements PipeTransform {

  transform(value: number, exponent: string): number {
    let power = parseFloat(exponent);
    return Math.pow(value, isNaN(power) ? 1 : power);
  }

}
