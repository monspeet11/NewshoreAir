import { Component, Input, OnInit } from '@angular/core';
import { Journey } from 'src/app/core/models/journey';

@Component({
  selector: 'app-travel-destination-letter',
  templateUrl: './travel-destination-letter.component.html',
  styleUrls: ['./travel-destination-letter.component.scss']
})
export class TravelDestinationLetterComponent implements OnInit {
  @Input("title") title: string;
  @Input("subtitle") subtitle: string;
  @Input("price") price: number;
  @Input("picture") picture: any;
  public loading: boolean = true;
  public journey: Journey;
  constructor() { }
  ngOnInit(): void {
  }
  ChangeCurrency() {
  }
}
