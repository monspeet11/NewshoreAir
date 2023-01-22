import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRouteFlightsRoutingModule } from './search-route-flights-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchRouteFlightsComponent } from './search-route-flights.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../../components/search/search.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { JourneysComponent } from '../../components/journeys/journeys.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchRouteFlightsComponent,
    SearchComponent,
    JourneysComponent,
  ],
  imports: [
    CommonModule,
    SearchRouteFlightsRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class SearchRouteFlightsModule { }
