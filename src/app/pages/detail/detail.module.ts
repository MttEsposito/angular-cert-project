import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { CardSentimentModule } from '@ACPComponents/card-sentiment/card-sentiment.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    CardSentimentModule,
    RouterModule.forChild([
      {
        path: "",
        component: DetailComponent,
      }
    ]),
  ]
})
export class DetailModule { }
