import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitcout'
})
export class DigitcoutPipe implements PipeTransform {

  transform(value:number): number {
    return value.toString().length;
  }

}
