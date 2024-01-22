import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';
import {TransactionItemComponent} from '../transaction-item/transaction-item.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-transaction-group',
  standalone: true,
  imports: [CommonModule, TransactionItemComponent],
  templateUrl: './transaction-group.component.html',
  styleUrl: './transaction-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionGroupComponent implements OnInit{
  @Input() dateGroup: string = '';
  @Input() transaction: any = [];

  ngOnInit() {
    this.transaction.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  convertToDateString(date: string | number | Date) {
    return new Date(date).toDateString();
  }
}
