import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesInterceptor } from './core/interceptors/services.interceptor';
import { ENVIRONMENT } from './tokens';
// import { StoreModule } from '@ngrx/store';
// import { JourneyReducer } from './core/reducers/journey.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // StoreModule.forRoot({
    //   journey: JourneyReducer,
    // }), 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ServicesInterceptor, multi: true },
    { provide: ENVIRONMENT, useValue: "NewshoreAir", multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
