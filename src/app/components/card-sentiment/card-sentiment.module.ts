import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSentimentComponent } from './card-sentiment.component';
import { MonthDataMsprComponent } from './month-data-mspr/month-data-mspr.component';
import { PipesModule } from '@ACPPipes/pipes.module';


@NgModule({
  declarations: [
    CardSentimentComponent,
    MonthDataMsprComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [CardSentimentComponent]
})
export class CardSentimentModule { }
