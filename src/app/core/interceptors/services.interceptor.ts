import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FlightsService } from 'src/app/shared/services/flights.service';


@Injectable()
export class ServicesInterceptor implements HttpInterceptor {
  constructor(private messageService: FlightsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((requestError) => {
        if (requestError.status !== 401) {
          const { error } = requestError;
          // this.messageService.add();
          console.log({
            severity: 'error',
            summary: `HTTP Error - ${requestError.status}`,
            detail: error && error.message,
          });
        }
        return throwError(() => new Error(requestError));
      })
    );
  }
}

