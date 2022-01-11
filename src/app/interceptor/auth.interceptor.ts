import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginService } from '@app/service/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const account = this.auth.token;
    const isApiUrl = request.url.startsWith('http://135.181.95.148:1000/api/Account/GetMyProfile');
    if (account && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${account}` }
      });
    }

    return next.handle(request);
  }
}

