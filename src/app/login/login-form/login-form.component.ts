import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {Credentials} from "../credentials";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  loginForm!: FormGroup;
  @Output() submit = new EventEmitter<Credentials>();

  constructor(private loginService: LoginService) {
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit(){
    const userName = this.loginForm.controls["userName"].value;
      const password = this.loginForm.controls["password"].value;
    this.loginService.login({userName, password}).subscribe();
  }

}
