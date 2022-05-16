import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StocksData } from '@ACPModel/stocks.interface';
import { StockDataManagerService } from '@ACPServices/stock-data-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public stocks$!: Observable<Array<StocksData>> ;

  constructor(
    private readonly _stockDataMgrSrv: StockDataManagerService
  ) { }

  public ngOnInit(): void {
    this.stocks$ = this._stockDataMgrSrv.stocks$;
  }

}
