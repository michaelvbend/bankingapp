import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormSuccessComponent } from './transaction-form-success.component';

describe('TransactionFormSuccessComponent', () => {
  let component: TransactionFormSuccessComponent;
  let fixture: ComponentFixture<TransactionFormSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionFormSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionFormSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
