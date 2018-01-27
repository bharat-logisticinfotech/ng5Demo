import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MovieService } from '../movie.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {

    form: FormGroup;
    heroes: Hero[] = [];

    constructor(private heroService: HeroService,
        private movieService: MovieService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            'fNameControl': new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                forbiddenNameValidator(/bobi/i)
            ]),
            'fPasswordControl': new FormControl('', Validators.required),
            'fConfirmPasswordControl': new FormControl('', [
                Validators.required,
                matchValidator()
            ]),
            'fTelControl': new FormControl('', Validators.required),
            'fEmailControl': new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            'fFromControl': new FormControl('', Validators.required),
            'fToControl': new FormControl('', [
                Validators.required,
                dateValidator()
            ]),
            'fAcceptControl': new FormControl('', Validators.required)
        });
    }
    ngAfterViewInit(): void {


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

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}

export function matchValidator() {
    let fcfirst: FormControl;
    let fcSecond: FormControl;
    return (control: FormControl): any => {
        console.log('validator called');
        if (!control.parent) {
            console.log('inside parent null');
            return { 'mismatch': true };
        }
        fcfirst = control.parent.get('fPasswordControl') as FormControl;
        fcSecond = control.parent.get('fConfirmPasswordControl') as FormControl;
        return fcfirst.value === fcSecond.value ? null : { 'mismatch': true };
    };
}

export function dateValidator() {
    let fcFromDate: FormControl;
    let fcToDate: FormControl;
    return (control: FormControl): any => {
        if (!control.parent) {
            console.log('inside parent null');
            return { 'mismatch': true };
        }
        fcFromDate = control.parent.get('fFromControl') as FormControl;
        fcToDate = control.parent.get('fToControl') as FormControl;
        const date1 = new Date(Date.parse(fcFromDate.value));
        const date2 = new Date(Date.parse(fcToDate.value));

        return date1 <= date2 ? null : { 'mismatch': true };;
    };
}
