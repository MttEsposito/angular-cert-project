import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'monthNamefromNumber'
})
export class MonthNamefromNumberPipe implements PipeTransform {

  public transform(value?: number): string {
    return value ? moment(value, 'M').format('MMMM') : '';
  }

}
