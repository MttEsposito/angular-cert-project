import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StocksData } from '@ACPModel/stocks.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StockDataManagerService {

  private _stocks: BehaviorSubject<Array<StocksData>> = new BehaviorSubject<Array<StocksData>>([]);

  public stocks$: Observable<Array<StocksData>> = this._stocks.asObservable();

  constructor() {
    this._generate();
  }

  public saveStockLocalStorage(value: string): void {
    const nextKeyName = `stocks_${moment().unix()}`;
    localStorage.setItem(nextKeyName, value);
    this._addStock({ key: nextKeyName, value });
  }

  public removeStock(item: any): void {
    localStorage.removeItem(item.key);
    const filterRemoved = this._stocks.value.filter(i => i.key !== item.key);
    this._stocks.next(filterRemoved);
  }

  private _addStock(stock: StocksData): void {
    const stocks = this._stocks.value;
    stocks.push(stock);
    this._stocks.next(stocks);
  }

  private _generate(): void {
    const valuesStored = { ...localStorage };
    const output: Array<StocksData> = [];
    for (const k in valuesStored) {
      output.push({ key: k, value: valuesStored[k] });
    }
    this._stocks.next(output);
  }

}
