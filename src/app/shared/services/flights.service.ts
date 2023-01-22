import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Flight } from 'src/app/core/models/flight';
import { Journey } from 'src/app/core/models/journey';
import { Flights } from 'src/app/core/models/response';
import { Transport } from 'src/app/core/models/transport';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  public GetAllFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>(environment.urlApi);
  }

  public GetJourney(data?: any):  Observable<any> {
    return this.http.get<Flights[]>(environment.urlApi).pipe(map((res: Flights[]) => {
      var flight: Flights[];
      flight = res.filter(x => x.departureStation == data.origen && x.arrivalStation == data.destino);
      if (flight.length == 0) {
        let flightsOrigen: Flights[] = res.filter(x => x.departureStation == data.origen);
        let flightsDestino: Flights[] = res.filter(x => x.arrivalStation == data.destino);
        flightsOrigen.forEach(origen => {
          flightsDestino.forEach(destino => {
            if (origen.arrivalStation == destino.departureStation) {
              flight.push(origen);
              flight.push(destino);
            }
          });
        });
      }
      console.log(data.moneda);
      let flights: Flight[] = [];
      let priceTotal: any = 0;
      flight.forEach(item => {
        let trans: Transport = {
          flightCarrier: item.flightCarrier,
          flightNumber: item.flightNumber,
        }
        let fli: Flight = {
          origin: item.departureStation,
          destination: item.arrivalStation,
          price:  item.price * data.moneda,
          transport: trans
        };
        priceTotal = priceTotal + fli.price
        flights.push(fli);
      });


      var journey: Journey | any = {
        origin: data?.origen,
        destination: data?.destino,
        price: priceTotal,
        flights: flights,
      }
      return journey;
    }));
  }

  public GetAllCurrency(): Observable<any[]> {
    return this.http.get<any[]>(environment.divisa);
  }
}