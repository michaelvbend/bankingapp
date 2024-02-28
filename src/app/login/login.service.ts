import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Credentials} from "./credentials";
import {catchError, shareReplay, tap, throwError} from "rxjs";


interface responseData {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(credentials: Credentials) {
    return this.http.post<responseData>("http://localhost:8080/login", credentials).pipe(
      tap((user)=> {
        this.setAuthToken(user.token)
      }),
        catchError(error => {
          console.log("ERROR")
            return throwError(error);
        }),
        shareReplay()
    )

  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }
}
