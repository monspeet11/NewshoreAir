import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Journey } from 'src/app/core/models/journey';
import { FlightsService } from 'src/app/shared/services/flights.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() flights = new EventEmitter<Journey>();
  public loading: boolean = true;
  currens: any[] = [
    { value: 'USD' },
    { value: 'COP' },
    { value: 'EUR' },
  ];
  public form: FormGroup;
  public cop: number;
  static value: number;
  constructor(public formBuilder: FormBuilder, public service: FlightsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      origen: ['', Validators.required, Validators.maxLength(3)],
      destino: ['', Validators.required, Validators.maxLength(3)],
      moneda: 'USD'
    });
    this.loading = false;
  }
  SearchFlight() {
    this.loading = true;
    if (this.form.controls['origen'].value.length != 3 || this.form.controls['destino'].value.length != 3) {
      Swal.fire('Los campos deben tener 3 letras');
    } else if (this.form.controls['origen'].value == this.form.controls['destino'].value) {
      Swal.fire('El origen y el destino no pueden ser iguales');
    } else {
      this.GetMoney();
    }
  }
  GetMoney(){
     this.service.GetAllCurrency().subscribe((monedas: any) => {
      this.cop = monedas.rates[this.form.controls['moneda'].value.toUpperCase()]
      localStorage.setItem("cop",this.form.controls['moneda'].value.toUpperCase())
      this.GetJourney();
     },
     error => console.error
     );
  }
  GetJourney() {
    this.service.GetJourney({
      origen: this.form.controls['origen'].value.toUpperCase(),
      destino: this.form.controls['destino'].value.toUpperCase(),
      moneda: this.cop,
    }).subscribe((data: Journey) => {
      this.flights.emit(data);
      this.loading = false;
    },
    error => console.error
    );
  }
  
}
