import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppComponent, } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

 import { CountUpModule } from 'countup.js-angular2';
 import {NgxPageScrollModule} from 'ngx-page-scroll';
 import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
export const firebaseConfig = {
  apiKey: "AIzaSyCess_R-ORVuFyL06wSar0WnfHMx7R77sA",
    authDomain: "codeofduty-a3b06.firebaseapp.com",
    databaseURL: "https://codeofduty-a3b06.firebaseio.com",
    projectId: "codeofduty-a3b06",
    storageBucket: "codeofduty-a3b06.appspot.com",
    messagingSenderId: "679279141255"
};
firebase.initializeApp(firebaseConfig);

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CountUpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
   ],
  providers: [
    AngularFireDatabase 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
