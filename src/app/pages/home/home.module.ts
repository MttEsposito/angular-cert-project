import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { HomeComponent } from './home.component';
import { FormStockInputModule } from '@ACPComponents/form-stock-input/form-stock-input.module';
import { CardListItemModule } from '@ACPComponents/card-list-item/card-list-item.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormStockInputModule,
    CardListItemModule,
    OrderModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent,
      }
    ]),
  ]
})
export class HomeModule { }
