import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-transaction-form-success',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './transaction-form-success.component.html',
  styleUrl: './transaction-form-success.component.css'
})
export class TransactionFormSuccessComponent {
//TODO: Create success page when transaction was successful and create a variable in the form component
}
