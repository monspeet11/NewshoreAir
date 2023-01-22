import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DestinationsComponent } from './destinations.component';
import { FlightsService } from 'src/app/shared/services/flights.service';

describe('DestinationsComponent', () => {
  let component: DestinationsComponent;
  let fixture: ComponentFixture<DestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsComponent ],
      imports: [HttpClientTestingModule], 
      providers: [FlightsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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
