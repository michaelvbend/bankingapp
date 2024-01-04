import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray} from '@angular/forms';
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
      amount: new FormControl(null, Validators.required),
      receiver: new FormGroup({
        receiverName: new FormControl(null, Validators.required),
        receiverIban: new FormControl(null, Validators.required)
      }),
      description: new FormControl(null, Validators.maxLength(12)),
      saveInBook: new FormControl(null),
    });
  }


  onSubmit() {
    if (this.transactionForm.valid){
      alert("valid");
    }

    if(this.transactionForm.invalid){
      this.transactionForm.setErrors({"error":true})
    }

    console.log(this.transactionForm);
  }

  checkAddressBook(address: any) {
    this.transactionForm.controls['receiver'].patchValue({
      receiverName: address.name,
      receiverIban: address.iban,
    });
  }

  validateRequired(control: string): boolean{
  return !this.transactionForm.controls[control].valid && this.transactionForm.controls[control].touched || (!this.transactionForm.valid && this.transactionForm.hasError("error"));

  }
}
