import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app.routing';
import { HomepageComponent } from './homepage/homepage.component';




@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HomeComponent, SearchComponent, HomepageComponent],
  exports:[HomeComponent, SearchComponent, HomepageComponent]
})
export class PagesModule { }
