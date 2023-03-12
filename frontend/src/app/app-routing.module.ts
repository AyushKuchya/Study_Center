import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {path:'', component:FrontPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'booking',component:BookingFormComponent},
  {path:'details',component:DetailsComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
