import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard/dashboard2/dashboard2.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard1', pathMatch: 'full' },
  { path: 'dashboard1', component: Dashboard1Component },
  { path: 'dashboard2', component: Dashboard2Component }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
