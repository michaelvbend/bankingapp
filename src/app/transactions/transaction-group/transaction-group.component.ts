import { Component, Input } from '@angular/core';
import { TransactionItemComponent } from '../transaction-item/transaction-item.component';
import { Transaction } from '../../transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-group',
  standalone: true,
  imports: [CommonModule, TransactionItemComponent],
  templateUrl: './transaction-group.component.html',
  styleUrl: './transaction-group.component.css',
})
export class TransactionGroupComponent {
  @Input() dateGroup: string = '';
  @Input() transaction: any = [];

  convertToDateString(date: string | number | Date) {
    console.log(date, typeof date);
    return new Date(date).toDateString();
  }
}
