import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiFinnhubService } from '@ACPServices/api-finnhub.service';

describe('ApiFinnhubService', () => {
  let service: ApiFinnhubService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(ApiFinnhubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
