import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.scss']
})
export class JourneysComponent implements OnInit {
  @Input("origen") origen: string = "";
  @Input("destino") destino: string = "";
  @Input("precio") precio: number = 0;
  @Input("vuelo")  vuelo: string = "";
  public cop: any | null;
  public loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.loading = false;
    this.cop = localStorage.getItem("cop")
  }

}
