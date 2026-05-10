import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonSearchbar, IonItem, IonList, IonListHeader, IonLabel, IonButton, IonButtons } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common'; // Insert Comment
import { RouterLink } from '@angular/router';
import { FavouritesData } from '../services/favourites-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonSearchbar, IonList, IonItem, IonListHeader, IonLabel, IonButton, IonButtons, CommonModule, RouterLink],
})
export class HomePage implements OnInit { 
  studentNumber: string = 'G00485524';
  title: string = "";
  updatedBy: string = "";
  movies: any[] = [];

  constructor(
    private movieService: MovieService,
    private favouritesData: FavouritesData
  ) {
    console.log("constructor()");
  }

  //Ionic Components Life cycle Events from www.ionicframework.com/docs/angular/lifecycle-events.

  ngOnInit() {
    this.loadTrendingMovies();
    console.log("ngOnInit()");
  } 
//Week 10 Ionic Storage Angular Demo by Ger @ 10:30 mins async method used
  async addToFavourites(movie: any) {
    await this.favouritesData.set(movie.id, movie);
    console.log(`Added movie with ID ${movie.id} to favourites.`);
  }

  ionviewWillEnter() {
    console.log("ionViewWillEnter()");
  }

  ionviewDidEnter() {
    console.log("ionViewDidEnter()");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave()");
  }
  
  ionViewDidLeave() {
    console.log("ionViewDidLeave()");
  }

  //Code adapted from Week 7 Demo 1 HttpClient and Observables by GH
loadTrendingMovies() {
    this.movieService.getTrending().subscribe({
      next: (data: any) => {
        console.log(data);
        this.movies = data.results; 
        this.filteredMovies = [...this.movies];
      },
      error: (error) => console.log("error", error),
      complete: () => console.log("complete")
    });
  }
   // from: https://ionicframework.com/docs/api/searchbar#searchbars-in-toolbars
    public filteredMovies: any[] = [];

    // from https://ionicframework.com/docs/api/searchbar#searchbars-in-toolbars
  handleInput(event: any) {
    const query = event.target.value?.toLowerCase() || '';
    this.filteredMovies = this.movies.filter((movie: any) => 
      movie.title.toLowerCase().includes(query));
  }
}