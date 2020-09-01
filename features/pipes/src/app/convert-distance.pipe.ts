import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDistance'
})
export class ConvertDistancePipe implements PipeTransform {
  transform(value: number, targetUnit: string): any {

    switch (targetUnit) {
      case "km": value = value * 1.60934
        break;
      case "m": value = value * 1.60934 * 1000;
        break;
      case "cm": value = value * 1.60934 * 1000 * 1000;
        break;
      default:
       throw new Error('Target Unit not found');
    }

    return !value ? '' : value;
  }

}
