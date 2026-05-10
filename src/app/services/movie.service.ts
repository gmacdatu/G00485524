import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//From Week 5 Video on Observables and HTTP Client approx minute 7:00 by GH, and from https://developers.themoviedb.org/3/getting-started/introduction
export class MovieService {
  private apiKey: string = 'e9c99e07ab191b835b4f5bb3d7ff7f17'; 
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getTrending(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  //I couldn't get this API link to work for getSearchMovies() in home.page.ts, you can still search Trending Movies (which isn't very useful!). 
  getSearchMovies(query: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`);
  }
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }
  getMovieCredits(movieId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`);
  }
  getPersonDetails(personId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/person/${personId}?api_key=${this.apiKey}`);
    
  }
}