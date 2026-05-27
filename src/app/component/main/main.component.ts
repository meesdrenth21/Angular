import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../../Model/movie';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FooterComponent, NavComponent, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  movies: Movie[] = []

  
}
