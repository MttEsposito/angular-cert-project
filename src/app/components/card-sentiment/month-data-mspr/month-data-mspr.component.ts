import { Component, Input } from '@angular/core';
import { Sentiment } from '@ACPModel/setiment.interface';

@Component({
  selector: 'app-month-data-mspr',
  templateUrl: './month-data-mspr.component.html',
  styleUrls: ['./month-data-mspr.component.scss']
})
export class MonthDataMsprComponent {
  @Input() public item!: Sentiment;
}
