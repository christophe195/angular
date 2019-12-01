import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserCardComponent } from './navbar/user-card/user-card.component';
import { FooterComponent } from './navbar/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPolComponent } from './add-pol/add-pol.component';
import { FriendsComponent } from './friends/friends.component';
import { SignupComponent } from './signup/signup.component';

var appRoutes: Routes = [];
if(localStorage.getItem("Token") == undefined) {
  appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: LoginComponent }
    ];
} else {
  appRoutes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'pols', component: LoginComponent },
    { path: 'friends', component: FriendsComponent }
    ];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    NavbarComponent,
    UserCardComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    AddPolComponent,
    FriendsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
