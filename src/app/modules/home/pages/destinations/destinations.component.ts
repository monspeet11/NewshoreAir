import { Component, OnInit } from '@angular/core';
import { Journey } from 'src/app/core/models/journey';
import { Flights } from 'src/app/core/models/response';
import { FlightsService } from 'src/app/shared/services/flights.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  public loading: boolean = true;
  public journey: Journey;
  public destinations: Flights[];
  constructor(
    private flightsServices: FlightsService
  ) { }

  ngOnInit(): void {
    this.flightsServices.GetAllFlights()
      .subscribe((data: Flights[]) => {
        this.destinations = data;
      },
        error => console.error
      )
  };
}
