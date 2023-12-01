import { Component } from '@angular/core';
import {AccountSummaryComponent} from "./account-summary/account-summary.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {HeaderIntroComponent} from "./header-intro/header-intro.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AccountSummaryComponent, HeaderIntroComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
