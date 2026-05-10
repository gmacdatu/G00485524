import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class PersonDetailsPage implements OnInit {
  person: any;
  movies: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.movieService.getPersonDetails(Number(id)).subscribe(data => {
          this.person = data;
        });
        this.movieService.getPersonDetails(Number(id)).subscribe(data => {
          this.movies = data.cast;
        });
      }
    });
  }
}