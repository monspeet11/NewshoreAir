import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRouteFlightsComponent } from './search-route-flights.component';

const routes: Routes = [
  { path: '', component: SearchRouteFlightsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRouteFlightsRoutingModule { }
