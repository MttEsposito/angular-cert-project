import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockDataManagerService } from '@ACPServices/stock-data-manager.service';

@Component({
  selector: 'app-form-stock-input',
  templateUrl: './form-stock-input.component.html',
  styleUrls: ['./form-stock-input.component.scss']
})
export class FormStockInputComponent {

  public maxLength: number = 5;

  constructor(
    private readonly _stockDataMgrSrv: StockDataManagerService
  ) { }

  public saveStock(form: NgForm): void {
    if (form.valid) {
      const value: string = form.value.stock;
      if (value.trim()) {
        this._stockDataMgrSrv.saveStockLocalStorage(value);
        form.resetForm();
      } else {
        alert("Clean the input from all the spaces");
      }
    }
  }

}
