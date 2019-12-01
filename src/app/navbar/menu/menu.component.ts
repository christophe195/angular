import { Component, OnInit } from '@angular/core';
import { Menuitem } from '../models/menuitem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentToken = localStorage.getItem("Token"); // current usertoken
  menuitems:Menuitem[]; // list of menu items

  constructor() { }

  ngOnInit() {
    if(this.currentToken == undefined) {
      /*guest*/
      this.menuitems = [
        new Menuitem("home", "fas fa-book", "Home"),
        new Menuitem("signin", "fas fa-book", "SignIn"),
        new Menuitem("signup", "fas fa-book", "SignUp")
      ];
    } else {
      /*user*/
      this.menuitems = [
        new Menuitem("dashboard", "fas fa-book", "Dashboard"),
        new Menuitem("pols", "fas fa-book", "mijn Pols"),
        new Menuitem("friends", "fas fa-book", "Mijn Vrienden")
      ];
    }
  }

}