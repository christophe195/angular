import { Component, OnInit } from '@angular/core';
import { User } from '../login/models/user.model';
import { MembersService } from '../services/members.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User(0, "", "", "", "", "", "", ""); // empty user obj (form)
  password : string = ""; // (re) password
  formDisabled : boolean = false; // true on submit
  constructor(private _MembersService:MembersService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.user.password == this.password) { // check if password an re password are the same
      this.formDisabled = true; // disable multiple click 
      this._MembersService.addUser(this.user).subscribe(
        result => {
          this.router.navigate(['/signin']); // go to signin
        }
      );
    } else {
      alert("pass not the same.");
    }
  }
}
