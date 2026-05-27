import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { WatchlistService } from '../../Service/watchlist.service';

@Component({
  selector: 'app-new-movie',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.css'
})
export class NewMovieComponent {
  router = inject(Router);
   watchlistService = inject(WatchlistService);

  movieForm = new FormGroup({
    movie: new FormControl('', Validators.required)
  });

  clicked() {  
    if(this.movieForm.valid){
      const newMovie = new Movie();
      newMovie.name = this.movieForm.value.movie;
      this.watchlistService.newMovie(newMovie);
      this.router.navigate('');

    }
  }
}

