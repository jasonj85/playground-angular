import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor(
    private service: MoviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['q']) 
      {
        let query = params['q'];
        this.service.searchMovies(query)
          .subscribe(res => this.movies = res.Search)
      }
    });
  }
}
