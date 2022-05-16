import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '@ACPModel/quote.interface';
import { CardResultState } from '@ACPModel/result-card-state.enum';
import { StocksData } from '@ACPModel/stocks.interface';
import { SymbolLookup } from '@ACPModel/symbolLookup.interface';
import { ApiFinnhubService } from '@ACPServices/api-finnhub.service';
import { StockDataManagerService } from '@ACPServices/stock-data-manager.service';

@Component({
  selector: 'app-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.scss']
})
export class CardListItemComponent implements OnInit {

  @Input() public item!: StocksData;
  public stockSymbol: SymbolLookup | undefined;
  public quote!: Quote;
  public isLoading: boolean = false;
  public result!: CardResultState;
  public switchStatesEnum = CardResultState;

  constructor(
    private readonly _apiFinnhubSrv: ApiFinnhubService,
    private readonly _stockDataMgrSrv: StockDataManagerService
  ) { }

  public ngOnInit(): void {
    this.getStockData();
  }

  public async getStockData(): Promise<void> {
    try {
      if (this.item && this.item.value) {
        this.isLoading = true;
        this.stockSymbol = await this._apiFinnhubSrv.getSymbolLookupStock(this.item.value);
        if (this.stockSymbol) {
          this.quote = await this._apiFinnhubSrv.getQuoteStock(this.stockSymbol.symbol);
          this.result = CardResultState.done;
        } else {
          this.result = CardResultState.notfound;
        }
      } else {
        throw new Error("Missing input item");
      }
    } catch (error) {
      this.result = CardResultState.error;
    } finally {
      this.isLoading = false;
    }
  }

  public removeItem(): void {
    this._stockDataMgrSrv.removeStock(this.item);
  }

}
