import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ApiFinnhubService } from '@ACPServices/api-finnhub.service';

import { CardSentimentComponent } from './card-sentiment.component';

describe('CardSentimentComponent', () => {
  let component: CardSentimentComponent;
  let fixture: ComponentFixture<CardSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSentimentComponent],
      imports: [HttpClientModule],
      providers: [ApiFinnhubService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(): string {
                return 'TSLA';
              },
            },
          },
        },
      },]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
