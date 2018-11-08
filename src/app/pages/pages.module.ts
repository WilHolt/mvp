import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { MzInputModule } from 'ngx-materialize'
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'
import { MzSelectModule } from 'ngx-materialize'
import { MzButtonModule } from 'ngx-materialize';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MzInputModule,
    MzIconModule,
    MzIconMdiModule,
    MzSelectModule,
    MzButtonModule
    
    
  ],
  declarations: [HomeComponent, SearchComponent, HomepageComponent, RegisterComponent, LoginComponent],
  exports:[HomeComponent, SearchComponent, HomepageComponent,]
})
export class PagesModule { }
