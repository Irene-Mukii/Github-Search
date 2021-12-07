import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { MyGhpageComponent } from './my-ghpage/my-ghpage.component';

const routes: Routes = [
  {path:'github-search', component: GithubSearchComponent},
  {path: 'my-ghpage', component: MyGhpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
