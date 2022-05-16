import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiFinnhubService } from '@ACPServices/api-finnhub.service';

import { CardListItemComponent } from './card-list-item.component';

describe('CardListItemComponent', () => {
  let component: CardListItemComponent;
  let fixture: ComponentFixture<CardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListItemComponent],
      imports: [HttpClientModule],
      providers: [ApiFinnhubService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
