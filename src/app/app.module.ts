import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Dashboard0Component } from './dashboard0/dashboard0.component';
import { Example1Component } from './example1/example1.component';
import { LeftLinksComponent } from './left-links/left-links.component';
import { Example2Component } from './example2/example2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { MovieService } from './movie.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        Dashboard0Component,
        Example1Component,
        LeftLinksComponent,
        Example2Component,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroesComponent,
        MessagesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    entryComponents: [

    ],
    providers: [HeroService, MessageService, MovieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
