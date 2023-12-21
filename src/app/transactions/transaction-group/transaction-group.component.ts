import { Component } from '@angular/core';
import {TransactionItemComponent} from "../transaction-item/transaction-item.component";

@Component({
  selector: 'app-transaction-group',
  standalone: true,
  imports: [TransactionItemComponent],
  templateUrl: './transaction-group.component.html',
  styleUrl: './transaction-group.component.css'
})
export class TransactionGroupComponent {

}
