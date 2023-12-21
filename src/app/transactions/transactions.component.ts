import { Component } from '@angular/core';
import {TransactionItemComponent} from "./transaction-item/transaction-item.component";
import {TransactionGroupComponent} from "./transaction-group/transaction-group.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionGroupComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

}
