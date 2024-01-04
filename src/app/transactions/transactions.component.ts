import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransactionGroupComponent } from './transaction-group/transaction-group.component';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { CommonModule, KeyValue } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionGroupComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  transactionMap: any = new Map();

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactions = this.transactionService.getAllTransactions();
    this.createMapFromTransactionList();
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return a.key > b.key ? -1 : b.key > a.key ? 1 : 0;
  };

  createMapFromTransactionList() {
    this.transactions.forEach((transaction) => {
      let key = transaction.date.toLocaleDateString();
      if (this.transactionMap.has(key)) {
        const existingArray = this.transactionMap.get(key) || [];
        existingArray.push(transaction);
      } else {
        this.transactionMap.set(key, [transaction]);
      }
    });
  }
}
