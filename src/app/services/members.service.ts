import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../login/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }
  /*get users api call*/
  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>("https://localhost:44364/api/Members");
  }

  /*add user api call*/
  addUser(user: User) {
    return this.http.post<User>("https://localhost:44364/api/Members", user);
  }

  /*get user by email api call*/
  getUserByEmail(email:string)
  {
    return this.http.get<User>("https://localhost:44364/api/Members/SearchByEmail/"+ email );
  }

}
