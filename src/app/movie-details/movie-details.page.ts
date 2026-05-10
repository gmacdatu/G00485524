import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,

  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, CommonModule, FormsModule, RouterLink]
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  credits: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];

      // Fetch Movie Info
      this.movieService.getMovieDetails(movieId).subscribe((data) => {
        this.movie = data;
      });

      // Fetch Information about the cast and crew of the movie
      this.movieService.getMovieCredits(movieId).subscribe((data: any) => {
        this.credits = data.cast; 
      });
    });
  }
}