import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserSearchComponent } from './github-search/github-search.component';
import{LandingPageComponent} from './landing-page/landing-page.component'
import {GithubRepoSearchComponent} from './github-repo-search/github-repo-search.component'



const routes: Routes = [
  {path:'github-search', component: GithubUserSearchComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'repo-search', component: GithubRepoSearchComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
