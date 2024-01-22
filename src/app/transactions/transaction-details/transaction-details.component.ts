import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../transaction.service';
import { Transaction } from '../../transaction';

@Component({
  selector: 'app-transaction-details',
  standalone: true,
  imports: [],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.css',
})
export class TransactionDetailsComponent implements OnInit {
  transactionId: string | null = '';
  transaction: Transaction = {} as Transaction;
  constructor(
    private route: ActivatedRoute,
    private transService: TransactionService
  ) {}

  ngOnInit(): void {
    this.transactionId = this.route.snapshot.paramMap.get('id');
    this.transService.getTransactionById(
      Number(this.transactionId)
    ).subscribe(res => this.transaction = res);
  }
}
