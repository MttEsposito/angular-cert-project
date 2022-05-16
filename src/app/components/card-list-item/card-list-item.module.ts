import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardListItemComponent } from './card-list-item.component';


@NgModule({
  declarations: [CardListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CardListItemComponent]
})
export class CardListItemModule { }
