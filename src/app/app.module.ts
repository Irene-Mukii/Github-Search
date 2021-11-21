import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GhContentDisplayedComponent } from './gh-content-displayed/gh-content-displayed.component';
import { MyGhpageComponent } from './my-ghpage/my-ghpage.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GhContentDisplayedComponent,
    MyGhpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
