import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common'; // Insert Comment

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, CommonModule],
})
export class HomePage implements OnInit {
  studentNumber: string = 'G00485524';
  title: string = "";
  updatedBy: string = "";
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadTrendingMovies();
  } 
  
  //Code adapted from Week 7 Demo 1 HttpClient and Observables by GH
loadTrendingMovies() {
    this.movieService.getTrending().subscribe({
      next: (data: any) => {
        console.log(data);
        this.movies = data.results; 
      },
      error: (error) => console.log("error", error),
      complete: () => console.log("complete")
    });
  }
}