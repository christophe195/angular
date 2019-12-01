import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login/user-login.module';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { AuthenticateService } from './services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: UserLogin = new UserLogin("",""); // empty obj for form
  submitted : boolean = false; // true when submitted
  user : Observable<User[]>; // list of user obj
  userLogin: UserLogin; // userlogin obj

  constructor(private _authenticateService : AuthenticateService, private router: Router) { }

  ngOnInit() {
    
  }

  /* on form submit */
  onSubmit() {

    this.submitted = true;
    
    this._authenticateService.authenticate(this.model).subscribe(result => {
      this._authenticateService.isLoggedin.next(result.token ? true : false);
      
      localStorage.setItem("Token",result.token);
      localStorage.setItem("username",result.username); // <-- for user-card
      localStorage.setItem("email",result.email); // <-- for user-card
      localStorage.setItem("MemberId",result.memberID.toString());

      this.submitted = false;
      this.router.navigate(['/']);
    })
   }
}
