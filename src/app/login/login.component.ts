import {Component, Output} from '@angular/core';
import {LoginFormComponent} from "./login-form/login-form.component";
import {LoginService} from "./login.service";
import {Credentials} from "./credentials";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {

  }




}
