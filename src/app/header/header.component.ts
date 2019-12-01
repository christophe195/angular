import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentToken = localStorage.getItem("Token"); // current user id
  isLogedIn : Boolean = false; // true if user is loged in
  constructor() { 
    if(this.currentToken != undefined) {
      this.isLogedIn = true;
    }
  }

  ngOnInit() {
  }

}
