import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionDetailsComponent } from './transactions/transaction-details/transaction-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactiondetails/:id', component: TransactionDetailsComponent },
];
