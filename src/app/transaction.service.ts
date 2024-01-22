import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, map} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  listOfTransactions: Transaction[] = [];
  constructor(private http: HttpClient) {}

  // getAllTransactions(start: number, batch: number): Transaction[] {
  //   return this.listOfTransactions.sort((a: Transaction,b: Transaction) => b.date.getDate() - a.date.getDate()).slice(start, batch);
  // }



  getAllTransactions(start: number, batch: number): Observable<any>{
    return this.http.get("http://localhost:8080/transaction")

  }

  postTransaction(postData: Transaction){
    this.http.post("http://localhost:8080/transaction", postData).subscribe(response => {
      console.log(response);
    });
  }
  getTransactionById(transactionId: number) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("id", transactionId);
    return this.http.get<Transaction>("http://localhost:8080/transaction",{params: httpParams})
      .pipe(map(response => response))
  }
}
