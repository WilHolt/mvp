import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import{ SearchComponent} from './pages/search/search.component'
import{ HomeComponent} from './pages/home/home.component'
import{ HomepageComponent} from './pages/homepage/homepage.component'
 
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'buscar', component: SearchComponent }

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    //  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}