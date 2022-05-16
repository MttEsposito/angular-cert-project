import { NgModule } from '@angular/core';
import { MonthNamefromNumberPipe } from '@ACPPipes/month-name-from-number/month-name-from-number.pipe';


@NgModule({
  declarations: [MonthNamefromNumberPipe],
  exports: [MonthNamefromNumberPipe]
})
export class PipesModule { }
