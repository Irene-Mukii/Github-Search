import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {User} from '../app/user'
import { Observable , throwError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { retry } from 'rxjs-compat/operator/retry';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public token: string = environment.accessToken;

  constructor(private httpClient:HttpClient) { }
    
    //for user 
    public getProfile(searchQuery: any) : Observable <any>{

      let dataURL = `https://api.github.com/users/${searchQuery}`
      return this.httpClient.get<any>(dataURL).pipe(
        //retry(count: 1),
        catchError(this.handleErrors)
      );
    }
    //for repos

    public getRepos(searchQuery: any) : Observable <any []>{

      let dataURL = `https://api.github.com/users/${searchQuery}/repos`
      return this.httpClient.get<any[]>(dataURL).pipe(
        //retry(count: 1),
        catchError(this.handleErrors)
      );
    }

    public getRepoData(searchQuery: any) : Observable <any[]> {
      let dataURL= `https://api.github.com/search/repositories?q=${searchQuery}`
      return this.httpClient.get<any[]>(dataURL).pipe(
        catchError(this.handleErrors)
      );
    }

    public handleErrors(error: HttpErrorResponse){
      let errorMessage: string;
      if (error.error instanceof ErrorEvent){
        //client side error
        errorMessage = `MESSAGE : ${error.error.message} `
      }
      else{
        //server side error
        errorMessage = `STATUS : ${error.status} MESSAGE : ${error.error.message} `
     
      }
      return throwError(errorMessage);
    }



  
}
