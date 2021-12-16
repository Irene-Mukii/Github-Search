import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';
import { User } from '../user';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubUserSearchComponent implements OnInit {
  newUser = new User(0,'','', new Date,'','','','','');
  public githubUserQuery!: string;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;
  

  constructor(private githubService : GithubService ) { }

  public  getUser(){
    this.githubService.getProfile(this.githubUserQuery).subscribe((data: any)=>{
      this.githubProfile=data;
    }, (error: any)=> {
      this.errorMessage= error;
    });

    this.githubService.getRepos(this.githubUserQuery).subscribe( (data: any[])=>{
      data.forEach(element => {
        this.githubRepos=data;
      });
      
    }, (error: any)=>{
      this.errorMessage = error;
    });

  }

    
  ngOnInit(): void {
  }

}
