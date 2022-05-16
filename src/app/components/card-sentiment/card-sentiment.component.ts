import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardResultState } from '@ACPModel/result-card-state.enum';
import { ApiSentiment } from '@ACPModel/setiment.interface';
import { SymbolLookup } from '@ACPModel/symbolLookup.interface';
import { ApiFinnhubService } from '@ACPServices/api-finnhub.service';

@Component({
  selector: 'app-card-sentiment',
  templateUrl: './card-sentiment.component.html',
  styleUrls: ['./card-sentiment.component.scss']
})
export class CardSentimentComponent implements OnInit {

  public stockSymbol!: SymbolLookup;
  public monthData!: ApiSentiment;
  public isLoading: boolean = false;
  public result!: CardResultState;
  public switchStatesEnum = CardResultState;

  constructor(
    private readonly _activeRoute: ActivatedRoute,
    private readonly _apiFinnhubSrv: ApiFinnhubService,
  ) { }

  public async ngOnInit(): Promise<void> {
    try {
      this.isLoading = true;
      const symbol = this._activeRoute.snapshot.paramMap.get("symbol");
      if (symbol) {
        const promises = [
          this._apiFinnhubSrv.getSymbolLookupStock(symbol),
          this._apiFinnhubSrv.getSentimentLastThreeMonths(symbol)
        ];
        const response = await Promise.all(promises);
        this.stockSymbol = response[0] as SymbolLookup;
        this.monthData = response[1] as ApiSentiment;
        this.result = CardResultState.done;
      } else {
        throw new Error("Param route is missing");
      }
    } catch (error) {
      this.result = CardResultState.error;
    } finally {
      this.isLoading = false;
    }
  }

}
