import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-transaction-form-success',
  standalone: true,
  imports: [
    RouterModule,
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
