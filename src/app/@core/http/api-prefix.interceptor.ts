import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !/^(http|https):/i.test(request.url) &&
      !localStorage.getItem('token')
    ) {
      request = request.clone({
        url: environment.serverUrl + request.url,
      });
    } else if (
      !/^(http|https):/i.test(request.url) &&
      localStorage.getItem('token')
    ) {
      request = request.clone({
        url: environment.serverUrl + request.url,
        headers: new HttpHeaders({
          //'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        }),
      });
    }
    return next.handle(request);
  }
}
