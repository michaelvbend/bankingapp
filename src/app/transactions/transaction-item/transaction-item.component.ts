import { Component, Input } from '@angular/core';
import { Transaction } from '../../transaction';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-transaction-item',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css',
})
export class TransactionItemComponent {
  @Input() transaction: Transaction = {} as Transaction;
}
