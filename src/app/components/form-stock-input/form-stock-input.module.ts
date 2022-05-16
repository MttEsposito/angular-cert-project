import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormStockInputComponent } from './form-stock-input.component';


@NgModule({
  declarations: [
    FormStockInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormStockInputComponent]
})
export class FormStockInputModule { }
