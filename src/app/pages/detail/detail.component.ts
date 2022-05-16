import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(
    private readonly _router: Router
  ) { }

  public goToHomepage(): void {
    this._router.navigate(['']);
  }
}
