import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogin } from 'src/app/login/user-login/user-login.module';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  isLoggedin = new BehaviorSubject(false);
  constructor(private _httpClient: HttpClient) { }

  isLoggedIn()  //<-- checking token
  {
    if(localStorage.getItem("token")) 
    {
      return true;
    } 
    else 
    {
      return false;
    }
  }

  /*authenticate service */
  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44364/api/Members/authenticate", userLogin);
  }
}