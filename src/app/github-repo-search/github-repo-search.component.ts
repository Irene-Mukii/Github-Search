import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-github-repo-search',
  templateUrl: './github-repo-search.component.html',
  styleUrls: ['./github-repo-search.component.css']
})
export class GithubRepoSearchComponent implements OnInit {

  public githubUserQuery!: string;
  public githubRepoQuery!:any;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;
  

  constructor(private githubService : GithubService ) { }

  public  getRepo(){
    this.githubService.getRepoData(this.githubRepoQuery).subscribe((data:any[])=>{
      this.githubRepos=data;
    }, (error:any)=>{
      this.errorMessage =error;
    });
  }

  ngOnInit(): void {
  }

}
