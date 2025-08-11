import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string;
  language: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly username = 'Jonatas-Lira';
  private readonly apiUrl = `https://api.github.com/users/${this.username}/repos?sort=updated&direction=desc`;

  constructor(private http: HttpClient) { }

  getRepos(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Falha ao buscar repositórios do GitHub:', error);
        return of([]); 
      })
    );
  }
}