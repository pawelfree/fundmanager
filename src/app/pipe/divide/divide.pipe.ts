import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'divide'})
export class DividePipe implements PipeTransform {
  transform(value: number, divisor: number): number {
    if (divisor === 0) {
      return 0;
    }
    return value / divisor;
  }
}
