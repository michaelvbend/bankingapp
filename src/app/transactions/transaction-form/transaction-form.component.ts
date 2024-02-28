import { CommonModule } from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Transaction} from "../../transaction";
import {TransactionService} from "../../transaction.service";
import {TransactionFormSuccessComponent} from "../transaction-form-success/transaction-form-success.component";

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, TransactionFormSuccessComponent],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent implements OnInit {
  formSuccessfull = false;
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

  constructor(private transactionService: TransactionService, private router: Router) {};
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
      const transaction: Transaction = {
        date: new Date(),
        fromIBAN: "testiban",
        toIBAN: this.transactionForm.value.receiver.receiverIban,
        accountId: 12,
        title: this.transactionForm.value.receiver.receiverName,
        description: this.transactionForm.value.description,
        amount: -this.transactionForm.value.amount,
        category: ""
      }
      this.createTransaction(transaction);
      this.formSuccessfull = true;
    }

    if(this.transactionForm.invalid){
      this.transactionForm.setErrors({"error":true})
    }
  }

  createTransaction(postData: Transaction){
    this.transactionService.postTransaction(postData);
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

  validateTooLong(control: string): boolean{
    return !this.transactionForm.controls[control].valid && this.transactionForm.controls[control].touched;
  }

  protected readonly event = event;
}
