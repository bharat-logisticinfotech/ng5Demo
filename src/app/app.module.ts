import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }          from '@angular/forms';
//import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Example1Component } from './example1/example1.component';
import { LeftLinksComponent } from './left-links/left-links.component';
import { Example2Component } from './example2/example2.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Example1Component,
    LeftLinksComponent,
    Example2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
