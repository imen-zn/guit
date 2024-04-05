import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

@Injectable()
export class InterceptorauthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.accessToken;

    if ( accessToken && !request.url.includes("/auth/signin"))
    {
      let newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + accessToken)
    })
    return next.handle(newRequest);
    }
    else
    return next.handle(request);
  }
}
