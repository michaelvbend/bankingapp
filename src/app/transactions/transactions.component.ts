import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransactionGroupComponent } from './transaction-group/transaction-group.component';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { CommonModule, KeyValue } from '@angular/common';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {BehaviorSubject} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionGroupComponent, InfiniteScrollModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit{
  newTransaction: boolean = false;
  transactions: Transaction[] = [];
  transactionList = new BehaviorSubject<Transaction[]>([]);
  transactionMap: any = new Map();
  batch = 2;
  start = 0;
  constructor(private transactionService: TransactionService) {}



  ngOnInit(): void {
  this.transactionList.subscribe((transactions)=> {
    this.transactions = transactions;
  })
    this.fetchTransactions(this.start, this.batch);

  }

  fetchTransactions(start: number, batch: number){
    console.log("fetch")
    this.transactionService.getAllTransactions(this.start, this.batch).subscribe((response: Transaction[]) => {
        let listOfTransactions: Transaction[] = response;
     // listOfTransactions = listOfTransactions.sort((a: Transaction, b: Transaction) => new Date(b['date']).getDate() - new Date(a['date']).getDate()).slice(start, batch);
        this.transactionList.next(listOfTransactions);
        this.createMapFromTransactionList();

      }
    )
  }


  onScroll () {
    this.start = this.batch;
    this.batch += 1;
    this.fetchTransactions(this.start, this.batch);
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return new Date(a.key) > new Date(b.key) ? -1 : new Date(b.key) > new Date(a.key) ? 1 : 0;
  };

  createMapFromTransactionList() {
    this.transactions.forEach((transaction) => {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      let key = new Date(transaction.date).toLocaleDateString("en-US");
      if (this.transactionMap.has(key)) {
        const existingArray = this.transactionMap.get(key) || [];
        existingArray.push(transaction);
      } else {
        this.transactionMap.set(key, [transaction]);
      }
    });
  }
}
