import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  repository!: Repo;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      name:string;
      description:string;
    }

    this.http.get<ApiResponse>('https://api.github.com/users/daneden?access_token=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').subscribe((data: { name: any; description: any; }) => {
      // Succesful API request
      this.repository = new Repo()
    })
  }

}
