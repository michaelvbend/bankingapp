import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent implements OnInit {
  addressBook = [
    {
      name: 'John Lennon',
      iban: 'NL07RABO0130130130',
    },
    {
      name: 'Ringo Star',
      iban: 'NL07RABO0130130130',
    },
    {
      name: 'Paul McCartney',
      iban: 'NL07RABO0130130130',
    },
  ];
  transactionForm!: FormGroup;

  ngOnInit(): void {
    this.transactionForm = new FormGroup({
      amount: new FormControl(null),
      receiverName: new FormControl(null),
      receiverIban: new FormControl(null),
      description: new FormControl(null),
      saveInBook: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.transactionForm);
  }

  checkAddressBook(address: any) {
    this.transactionForm.patchValue({
      receiverName: address.name,
      receiverIban: address.iban,
    });
  }
}
