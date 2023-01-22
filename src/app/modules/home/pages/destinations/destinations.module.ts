import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations.component';
import { TravelDestinationLetterComponent } from '../../components/travel-destination-letter/travel-destination-letter.component';
import { DestinationsRoutingModule } from './destinations-routing.module';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TravelDestinationLetterComponent,
    DestinationsComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class DestinationsModule { }
