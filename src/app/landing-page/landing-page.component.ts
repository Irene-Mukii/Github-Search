import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  githubProfile: any;
   
  username = 'Irene-Mukii';
  myProfile: any;
  githubRepos!: any[];
  errorMessage!: string;

  constructor(private githubService: GithubService ) { }
  public  getUser(){
    this.githubService.getProfile(this.username).subscribe((data: any)=>{
      this.githubProfile=data;
    }, (error: any)=> {
      this.errorMessage= error;
    });

    this.githubService.getRepos(this.username).subscribe( (data: any[])=>{
      this.githubRepos=data;
    }, (error: any)=>{
      this.errorMessage = error;
    });
  }


  ngOnInit(): void {
    this.githubService.getProfile('Irene-Mukii').subscribe( (data: any)=>{
      this.githubProfile=data;;
    });
  }

}
