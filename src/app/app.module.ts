import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard/dashboard2/dashboard2.component';
import { LayoutoptionsComponent } from './layoutoptions/layoutoptions.component';
import { TopnavigationComponent } from './layoutoptions/topnavigation/topnavigation.component';
import { BoxedComponent } from './layoutoptions/boxed/boxed.component';
import { FixedComponent } from './layoutoptions/fixed/fixed.component';
import { CollapsedsidebarComponent } from './layoutoptions/collapsedsidebar/collapsedsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dashboard1Component,
    Dashboard2Component,
    LayoutoptionsComponent,
    TopnavigationComponent,
    BoxedComponent,
    FixedComponent,
    CollapsedsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
