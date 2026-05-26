import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../../Service/watchlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  constructor(public watchlistService: WatchlistService){

  }

  ngOnInit() {
    this.watchlistService.getMovies();
  }

  toggleWatched(id: number){
    this.watchlistService.toggleWatched(id)
  }

  deleteMovie(id: number){
    this.watchlistService.deleteMovie(id);
  }



}
