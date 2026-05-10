import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonBackButton, IonCard } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FavouritesData } from '../services/favourites-data';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, CommonModule, FormsModule, RouterLink, IonicStorageModule, IonBackButton, IonCard]
})
export class FavouritesPage {
  favouriteMovies: any[] = []

  constructor(private favouritesData: FavouritesData) { }

  async ionViewWillEnter() {
    this.favouriteMovies = await this.favouritesData.getAllFavourites();
    console.log("Loaded favourite movies:", this.favouriteMovies);
  }
}
