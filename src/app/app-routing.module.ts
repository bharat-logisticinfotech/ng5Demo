import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'example1', component: Example1Component },
  { path: 'example2', component: Example2Component },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}