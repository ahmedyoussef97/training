import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(error => this.handlerError(error)));
  }

  // Customize the default error handler here if needed
  // private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
  //   if (!environment.production) {
  //     // Do something with the error
  //     log.error('Request error', response);
  //   }
  //   throw response;
  // }

  private handlerError(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    console.log(response.type);

    // if (response.status === 400) {
    // }
    // if (response.status === 404) {
    // }
    // if (response.status === 500) {
    // }
    // if (response.status === 401) {
    //   this.clearData();
    // }
    throw response;
  }
  private clearData() {
    // localStorage.removeItem('token');
    // localStorage.removeItem('currentUser');
    // localStorage.removeItem('calcData');
    // this.router.navigate(['/auth/login']);
  }
}
