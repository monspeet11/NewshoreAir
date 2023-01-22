import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDestinationLetterComponent } from './travel-destination-letter.component';

describe('TravelDestinationLetterComponent', () => {
  let component: TravelDestinationLetterComponent;
  let fixture: ComponentFixture<TravelDestinationLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDestinationLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelDestinationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
