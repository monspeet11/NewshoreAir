import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/core/models/flight';
import { Journey } from 'src/app/core/models/journey';
import { FlightsService } from 'src/app/shared/services/flights.service';

@Component({
  selector: 'app-search-route-flights',
  templateUrl: './search-route-flights.component.html',
  styleUrls: ['./search-route-flights.component.scss']
})
export class SearchRouteFlightsComponent implements OnInit {
  public flights: Flight[] | null;
  public journey: Journey | null;
  public loading: boolean = true;
  public prices: any | null;
  public cop: any | null;
  constructor(public service: FlightsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 800)
  }

  GetSearchFlight(jourey: Journey) {
    this.cop = localStorage.getItem("cop")
    this.journey = jourey;
    console.log(this.journey);
    this.flights = this.journey.flights;
    this.prices = this.journey.price;
  }
}