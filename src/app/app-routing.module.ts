import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'destinations',
    loadChildren: () => import('./modules/home/pages/destinations/destinations.module').then(m => m.DestinationsModule)
  },
  {
    path: 'search-route-flights',
    loadChildren: () => import('./modules/home/pages/search-route-flights/search-route-flights.module').then(m => m.SearchRouteFlightsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
