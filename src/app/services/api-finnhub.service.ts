import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, retry } from 'rxjs';
import { environment } from '@ACPEnviroments/environment';
import { ApiSymbolLookup, SymbolLookup } from '@ACPModel/symbolLookup.interface';
import { Quote } from '@ACPModel/quote.interface';
import { ApiSentiment } from '@ACPModel/setiment.interface';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiFinnhubService {

  private _baseUrl: string = environment.api.baseUrl;

  constructor(
    private readonly _http: HttpClient
  ) { }

  public async getQuoteStock(symbol: string): Promise<Quote> {
    const url = `${this._baseUrl}${environment.api.endpoint.quote}`;
    const params = new HttpParams()
      .append("symbol", symbol)
      .append("token", environment.api.token);
    const quote$ = this._http.get<Quote>(url, { params }).pipe(
      retry(2)
    );
    return lastValueFrom(quote$);
  }

  public async getSymbolLookupStock(value: string): Promise<SymbolLookup | undefined> {
    const url = `${this._baseUrl}${environment.api.endpoint.symbolLookup}`;
    const params = new HttpParams()
      .append("q", value)
      .append("token", environment.api.token);
    const symbolLookup$ = this._http.get<ApiSymbolLookup>(url, { params }).pipe(
      map(
        (data: ApiSymbolLookup) => data.result.find(
          (i: SymbolLookup) => i.symbol.toUpperCase() === value.toUpperCase()
        )
      ),
      retry(2)
    );
    return lastValueFrom(symbolLookup$);
  }

  public async getSentimentLastThreeMonths(symbol: string): Promise<ApiSentiment> {
    const from = moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DD');
    const to = moment().subtract(1, 'months').format('YYYY-MM-DD');
    const url = `${this._baseUrl}${environment.api.endpoint.insiderSentiment}`;
    const params = new HttpParams()
      .append("symbol", symbol)
      .append("from", from)
      .append("to", to)
      .append("token", environment.api.token);
    const insiderSentiment$ = this._http.get<ApiSentiment>(url, { params }).pipe(
      retry(2)
    );
    return lastValueFrom(insiderSentiment$);
  }
}
