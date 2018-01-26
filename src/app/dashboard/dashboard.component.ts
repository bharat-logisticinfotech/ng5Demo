import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MovieService } from '../movie.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    form: FormGroup;
    heroes: Hero[] = [];
    // fname: any;
    // password: any;
    // phone: any;
    // email: any;


    constructor(private heroService: HeroService,
        private movieService: MovieService,
        fb: FormBuilder
    ) {
        this.form = fb.group({
            'fNameControl': new FormControl('', [
                Validators.required,
                Validators.minLength(4)
            ]),
            'fPasswordControl': new FormControl('', Validators.required),
            'fTelControl': new FormControl('', Validators.required),
            'fEmailControl': new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            'fHikingControl': new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
        this.getHeroes();
        this.getMyMovies();
    }

    getMyMovies() {
        this.movieService.getMovies()
            .subscribe(movie => {
                // myMovie = movie;
                console.log('movie', movie);
            },
            (error: any) => {
                console.log('error', error);
            });
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe((heroes) => {
                this.heroes = heroes.slice(1, 5);
            });
    }

    onSubmit(): void {
        alert('submitting!!');
    }
}
