import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlightsService } from './flights.service';
import { environment } from 'src/environments/environment';

describe('GithubApiService', () => {
  let injector: TestBed;
  let service: FlightsService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightsService]
    });
    injector = getTestBed();
    service = injector.get(FlightsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  describe('#GetAllFlights', () => {
    it('should return an Observable<GetAllFlights[]>', () => {
      const dummyUsers = [{"departureStation":"MZL","arrivalStation":"MDE","flightCarrier":"CO","flightNumber":"8001","price":200},{"departureStation":"MZL","arrivalStation":"CTG","flightCarrier":"CO","flightNumber":"8002","price":200},{"departureStation":"PEI","arrivalStation":"BOG","flightCarrier":"CO","flightNumber":"8003","price":200},{"departureStation":"MDE","arrivalStation":"BCN","flightCarrier":"CO","flightNumber":"8004","price":500},{"departureStation":"CTG","arrivalStation":"CAN","flightCarrier":"CO","flightNumber":"8005","price":300},{"departureStation":"BOG","arrivalStation":"MAD","flightCarrier":"CO","flightNumber":"8006","price":500},{"departureStation":"BOG","arrivalStation":"MEX","flightCarrier":"CO","flightNumber":"8007","price":300},{"departureStation":"MZL","arrivalStation":"PEI","flightCarrier":"CO","flightNumber":"8008","price":200},{"departureStation":"MDE","arrivalStation":"CTG","flightCarrier":"CO","flightNumber":"8009","price":200},{"departureStation":"BOG","arrivalStation":"CTG","flightCarrier":"CO","flightNumber":"8010","price":200}];
  
      service.GetAllFlights().subscribe(users => {
        expect(users).toEqual(dummyUsers);
      });
  
      const req = httpMock.expectOne(environment.urlApi);
      expect(req.request.method).toBe("GET");
      req.flush(dummyUsers);
    });
  });

  describe('#GetAllCurrency', () => {
    it('should return an Observable<GetAllCurrency[]>', () => {
      const dummy = [{"provider":"https://www.exchangerate-api.com","WARNING_UPGRADE_TO_V6":"https://www.exchangerate-api.com/docs/free","terms":"https://www.exchangerate-api.com/terms","base":"USD","date":"2023-01-22","time_last_updated":1674345602,"rates":{"USD":1,"AED":3.67,"AFN":89.51,"ALL":107.63,"AMD":395.83,"ANG":1.79,"AOA":509.3,"ARS":182.64,"AUD":1.44,"AWG":1.79,"AZN":1.7,"BAM":1.8,"BBD":2,"BDT":105.99,"BGN":1.81,"BHD":0.376,"BIF":2060.13,"BMD":1,"BND":1.32,"BOB":6.92,"BRL":5.19,"BSD":1,"BTN":81.12,"BWP":12.76,"BYN":2.57,"BZD":2,"CAD":1.34,"CDF":2062.26,"CHF":0.92,"CLP":824,"CNY":6.78,"COP":4705.18,"CRC":566.1,"CUP":24,"CVE":101.76,"CZK":22.07,"DJF":177.72,"DKK":6.88,"DOP":56.65,"DZD":135.95,"EGP":29.65,"ERN":15,"ETB":53.67,"EUR":0.923,"FJD":2.17,"FKP":0.808,"FOK":6.88,"GBP":0.808,"GEL":2.66,"GGP":0.808,"GHS":12.55,"GIP":0.808,"GMD":63.1,"GNF":8675.82,"GTQ":7.85,"GYD":209.13,"HKD":7.83,"HNL":24.67,"HRK":6.95,"HTG":148.5,"HUF":363.79,"IDR":15076.41,"ILS":3.4,"IMP":0.808,"INR":81.12,"IQD":1459.52,"IRR":42082.53,"ISK":142.58,"JEP":0.808,"JMD":153.04,"JOD":0.709,"JPY":129.63,"KES":124.13,"KGS":85.79,"KHR":4120.11,"KID":1.44,"KMF":454.02,"KRW":1234.5,"KWD":0.306,"KYD":0.833,"KZT":462.81,"LAK":16888.37,"LBP":1507.5,"LKR":365.25,"LRD":155.66,"LSL":17.15,"LYD":4.77,"MAD":10.2,"MDL":18.99,"MGA":4328.66,"MKD":56.97,"MMK":2102.15,"MNT":3466.43,"MOP":8.06,"MRU":36.37,"MUR":43.94,"MVR":15.45,"MWK":1027.52,"MXN":18.9,"MYR":4.29,"MZN":64.25,"NAD":17.15,"NGN":453.54,"NIO":36.51,"NOK":9.88,"NPR":129.8,"NZD":1.55,"OMR":0.384,"PAB":1,"PEN":3.83,"PGK":3.52,"PHP":54.43,"PKR":229.63,"PLN":4.34,"PYG":7422.62,"QAR":3.64,"RON":4.55,"RSD":108.35,"RUB":68.72,"RWF":1099.74,"SAR":3.75,"SBD":8.39,"SCR":13.6,"SDG":545.66,"SEK":10.3,"SGD":1.32,"SHP":0.808,"SLE":19.55,"SLL":19554.79,"SOS":568.24,"SRD":31.87,"SSP":703.89,"STN":22.61,"SYP":2530.78,"SZL":17.15,"THB":32.74,"TJS":10.25,"TMT":3.5,"TND":3.09,"TOP":2.37,"TRY":18.81,"TTD":6.76,"TVD":1.44,"TWD":30.3,"TZS":2334.04,"UAH":36.89,"UGX":3675.98,"UYU":39.66,"UZS":11296.76,"VES":20.53,"VND":23456.79,"VUV":120.57,"WST":2.66,"XAF":605.36,"XCD":2.7,"XDR":0.74,"XOF":605.36,"XPF":110.13,"YER":250.17,"ZAR":17.16,"ZMW":18.59,"ZWL":745.94}}]
      service.GetAllCurrency().subscribe(users => {
        expect(users).toEqual(dummy);
      });
  
      const req = httpMock.expectOne(environment.divisa);
      expect(req.request.method).toBe("GET");
      req.flush(dummy);
    });
  });

  describe('#GetJourney', () => {
    it('should return an Observable<GetJourney[]>', () => {
      const dummyUsers = [{ origin: 'MLZ', destination: 'BCN', price: 0, flights: [  ] }]
      service.GetJourney(
        {
          origen: "MLZ",
          destino: "BCN",
          moneda: "COP",
        }
      ).subscribe(users => {
        expect(users).toEqual(dummyUsers);
      });
  
      const req = httpMock.expectOne(environment.urlApi);
      expect(req.request.method).toBe("GET");
      req.flush(dummyUsers);
    });
  });

  describe('#GetJourney', () => {
    it('should return an Observable<GetJourney[]>', () => {
      const dummyUsers = [{ origin: 'MZL', destination: 'MDE', price: 200, flights: [{ origin: 'MZL', destination: 'MDE', price: 200, transport: { flightCarrier: 'CO', flightNumber: '8001' } } ] }] 
      service.GetJourney(
        {
          origen: "MZL",
          destino: "MDE",
          moneda: "COP",
        }
      ).subscribe(users => {
        expect(users).toEqual(dummyUsers);
      });
  
      const req = httpMock.expectOne(environment.urlApi);
      expect(req.request.method).toBe("GET");
      req.flush(dummyUsers);
    });
  });

});