import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private apiUrl = 'http://localhost:8080/Movies';
  movies: Movie[] = [];

  constructor(private http: HttpClient) { }

   getMovies() {
    this.http.get<Movie[]>(this.apiUrl).subscribe(movies => {
      this.movies = movies;
    });
  }

  toggleWatched(id: number) {
    this.http.post<Movie>(`${this.apiUrl}/${id}/toggle`, {}).subscribe(updatedMovie => {
      this.movies[id] = updatedMovie;
    });
  }

  deleteMovie(id: number) {
    this.http.delete<Movie[]>(`${this.apiUrl}/${id}`).subscribe(updatedList => {
      this.movies = updatedList;
    });
  }
}

