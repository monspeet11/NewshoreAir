import { Component, Inject, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { State } from './core/models/state.model';
import { ENVIRONMENT } from './tokens';
import { Observable } from 'rxjs';
import { Journey } from './core/models/journey';
import { NgForm } from '@angular/forms';
// import { AddJourneyAction } from './core/actions/journey.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  journey: Observable<Array<Journey>>;

  // private store: Store<State>)
  constructor(
    @Inject(ENVIRONMENT) public enviroment: string,
  )
  {}
  ngOnInit(): void {
    // this.journey = this.store.select((store) => {
    //   return store.Journey
    // });
  }

  // addJourney(form: NgForm) {
  //   this.store.dispatch(new AddJourneyAction(form.value));
  //   form.reset();
  // }

  title = this.enviroment || 'NewshoreAir';
}
