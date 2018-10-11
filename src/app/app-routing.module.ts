import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard/dashboard2/dashboard2.component';
import { TopnavigationComponent } from './layoutoptions/topnavigation/topnavigation.component';
import { BoxedComponent } from './layoutoptions/boxed/boxed.component';
import { FixedComponent } from './layoutoptions/fixed/fixed.component';
import { CollapsedsidebarComponent } from './layoutoptions/collapsedsidebar/collapsedsidebar.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
  {path: 'dashboard', children: [
    {
      path: '', component: Dashboard1Component
    },
    {
      path: 'dashboard1', component: Dashboard1Component
    },
    {
      path: 'dashboard2', component: Dashboard2Component
    }
  ]},
  // { path: 'dashboard1', component: Dashboard1Component },
  // { path: 'dashboard2', component: Dashboard2Component },
  { path: 'layout', children: [
    {
      path: '', component: TopnavigationComponent
    },
    {
      path: 'topnavigation', component: TopnavigationComponent
    },
    {
      path: 'boxed', component: BoxedComponent
    },
    {
      path: 'fixed', component: FixedComponent
    },
    {
      path: 'collapsed', component: CollapsedsidebarComponent
    }
  ]},
  // { path: 'topnavigation', component: TopnavigationComponent },
  // { path: 'boxed', component: BoxedComponent },
  // { path: 'fixed', component: FixedComponent },
  // { path: 'collapsed', component: CollapsedsidebarComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
