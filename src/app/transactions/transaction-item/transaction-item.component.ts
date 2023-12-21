import { Component, Input } from '@angular/core';
import { Transaction } from '../../transaction';

@Component({
  selector: 'app-transaction-item',
  standalone: true,
  imports: [],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css',
})
export class TransactionItemComponent {
  @Input() transaction: Transaction = {} as Transaction;
}
