import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    PagesModule,
    AppRoutingModule,
    RouterModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
