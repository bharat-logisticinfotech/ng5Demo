import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }          from '@angular/forms';
//import { AppComponent } from './app.component';
import { Dashboard0Component } from './dashboard0/dashboard0.component';
import { Example1Component } from './example1/example1.component';
import { LeftLinksComponent } from './left-links/left-links.component';
import { Example2Component } from './example2/example2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';


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
    AppRoutingModule
  ],
  entryComponents:[

  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
