import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  listOfTransactions: Transaction[] = [
    {
      id: 1,
      date: new Date('2023-01-01T12:00:00'),
      fromIBAN: 'NL01ABCD123456789',
      toIBAN: 'NL02EFGH987654321',
      accountId: 101,
      title: 'Salary',
      description: 'Monthly salary deposit',
      amount: 2500.0,
      category: 'Income',
    },
    {
      id: 2,
      date: new Date('2023-01-01T14:30:00'),
      fromIBAN: 'NL03WXYZ555555555',
      toIBAN: 'NL04UVWX666666666',
      accountId: 102,
      title: 'Rent Payment',
      description: 'Monthly rent payment',
      amount: -800.0,
      category: 'Housing',
    },
    {
      id: 3,
      date: new Date('2023-01-01T10:15:00'),
      fromIBAN: 'NL05LMNO111111111',
      toIBAN: 'NL06PQRS222222222',
      accountId: 103,
      title: 'Grocery Shopping',
      description: 'Weekly grocery shopping',
      amount: -75.5,
      category: 'Groceries',
    },
    {
      id: 4,
      date: new Date('2023-01-04T08:45:00'),
      fromIBAN: 'NL07JKLM333333333',
      toIBAN: 'NL08QRST444444444',
      accountId: 104,
      title: 'Utility Bill',
      description: 'Electricity bill payment',
      amount: -120.0,
      category: 'Utilities',
    },
    {
      id: 5,
      date: new Date('2023-01-05T15:20:00'),
      fromIBAN: 'NL09UVWX777777777',
      toIBAN: 'NL10YZAB888888888',
      accountId: 105,
      title: 'Dinner Out',
      description: 'Dinner at a restaurant',
      amount: -50.75,
      category: 'Dining',
    },
    {
      id: 6,
      date: new Date('2023-01-06T11:30:00'),
      fromIBAN: 'NL11BCDE999999999',
      toIBAN: 'NL12FGHI000000000',
      accountId: 106,
      title: 'Gas Refill',
      description: 'Car gas refill',
      amount: -40.0,
      category: 'Transportation',
    },
    {
      id: 7,
      date: new Date('2023-01-07T14:00:00'),
      fromIBAN: 'NL13IJKL123123123',
      toIBAN: 'NL14MNOP456456456',
      accountId: 107,
      title: 'Freelance Payment',
      description: 'Payment for freelance work',
      amount: 500.0,
      category: 'Income',
    },
    {
      id: 8,
      date: new Date('2023-01-08T09:15:00'),
      fromIBAN: 'NL15QRST789789789',
      toIBAN: 'NL16UVWX987987987',
      accountId: 108,
      title: 'Phone Bill',
      description: 'Monthly phone bill payment',
      amount: -30.0,
      category: 'Utilities',
    },
    {
      id: 9,
      date: new Date('2023-01-09T16:45:00'),
      fromIBAN: 'NL17YZAB111111111',
      toIBAN: 'NL18CDEF222222222',
      accountId: 109,
      title: 'Online Shopping',
      description: 'Purchase from an online store',
      amount: -90.5,
      category: 'Shopping',
    },
    {
      id: 10,
      date: new Date('2023-01-10T12:30:00'),
      fromIBAN: 'NL19GHIJ333333333',
      toIBAN: 'NL20KLMN444444444',
      accountId: 110,
      title: 'Gym Membership',
      description: 'Monthly gym membership fee',
      amount: -40.0,
      category: 'Fitness',
    },
  ];
  constructor() {}

  getAllTransactions(start: number, batch: number): Transaction[] {
    return this.listOfTransactions.sort((a: Transaction,b: Transaction) => b.date.getDate() - a.date.getDate()).slice(start, batch);
  }

  getTransactionById(transactionId: number) {
    const transaction = this.listOfTransactions.filter(
      (transaction) => transaction.id === transactionId
    );
    return transaction[0];
  }
}
