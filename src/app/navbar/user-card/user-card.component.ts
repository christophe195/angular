import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  email = localStorage.getItem("email"); // email of user
  username = localStorage.getItem("username"); // username of user
  currentToken = localStorage.getItem("Token"); // token of user
  islogedin : boolean = false;
  constructor() { }

  ngOnInit() {
    this.islogedin = (this.currentToken != undefined) ;
  }

}
