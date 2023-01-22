import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightsService } from 'src/app/shared/services/flights.service';
import { SearchRouteFlightsComponent } from './search-route-flights.component';

describe('SearchRouteFlightsComponent', () => {
  let component: SearchRouteFlightsComponent;
  let fixture: ComponentFixture<SearchRouteFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRouteFlightsComponent ],
      imports: [HttpClientTestingModule], 
      providers: [FlightsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRouteFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.GetSearchFlight({
      origin: "MLZ",
      destination: "MED",
      price: 700,
      flights: []
  });
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    const service: FlightsService = TestBed.get(FlightsService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: FlightsService = TestBed.get(FlightsService);
    expect(service.GetAllFlights).toBeTruthy();
   });

});