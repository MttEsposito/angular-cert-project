import { TestBed } from '@angular/core/testing';

import { StockDataManagerService } from '@ACPServices/stock-data-manager.service';

describe('StockDataManagerService', () => {
  let service: StockDataManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDataManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
