import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { MzButtonModule } from 'ngx-materialize'
import { MzDropdownModule } from 'ngx-materialize';
import { DashboardIndexFreteComponent } from './dashboard-index-frete/dashboard-index-frete.component'
@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzDropdownModule
  ],
  declarations: [DashboardIndexComponent, DashboardIndexFreteComponent],
  exports:[DashboardIndexComponent,DashboardIndexFreteComponent]
})
export class DashboardModule { }
