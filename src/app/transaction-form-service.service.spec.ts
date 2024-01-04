import { TestBed } from '@angular/core/testing';

import { TransactionFormServiceService } from './transactions/transaction-form/transaction-form-service.service';

describe('TransactionFormServiceService', () => {
  let service: TransactionFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
