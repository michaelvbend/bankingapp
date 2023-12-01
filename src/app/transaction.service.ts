import { Injectable } from '@angular/core';
import {Transaction} from "./transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  listOfTransactions: Transaction[] = [
    {id: 1, accountId: 1, title: "Albert Heijn", description: "TN9899875AH", amount: 10.59},
    {id: 2, accountId: 1, title: "Albert Heijn", description: "TN9899425AH", amount: 50.87},
    {id: 3, accountId: 1, title: "Starbucks", description: "TN2352352STAR", amount: 6.00},
    {id: 4, accountId: 1, title: "Zara", description: "TN634643ZR", amount: 219.00},
    {id: 5, accountId: 1, title: "Shell", description: "TN52352523SH", amount: 20.01},

  ];
  constructor() { }

  getAllTransactions(): Transaction[] {
    return this.listOfTransactions;
  }
}
