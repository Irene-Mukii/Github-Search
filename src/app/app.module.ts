import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
//import {NgProgressModule} from '@ngx-progressbar/core'
//import {NgProgressHttpClientModule} from '@ngx-progressbar/http-client'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserSearchComponent } from './github-search/github-search.component';


import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubRepoSearchComponent } from './github-repo-search/github-repo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserSearchComponent,
  
    NavbarComponent,
       LandingPageComponent,
       GithubRepoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //NgProgressModule.forRoot(),
    //NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
