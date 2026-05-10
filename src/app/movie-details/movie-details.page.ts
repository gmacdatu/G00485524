import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, RouterLink]
})
export class MovieDetailsPage implements OnInit {

  movie: any;
  credits: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Using the movieId to fetch movie details from JSON

      const movieId = params['id'];
      // Using the movieId to fetch movie details from JSON

      // Fetch Movie Info
    this.movieService.getMovieDetails(movieId).subscribe((data) => {
      this.movie = data;
    });

    // Fetch Cast/Crew Info
   // this.movieService.getMovieCredits(movieId).subscribe((data: any) => {
     // this.credits = data.cast; // This gets the actors
    //})
    });
  }
}
