import { Routes } from '@angular/router';
import { MovieComponent } from './component/movie/movie.component';
import { NewMovieComponent } from './component/new-movie/new-movie.component';

export const routes: Routes = [
    {path: '', component: MovieComponent},
    {path: 'new', component: NewMovieComponent}
];
