import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectionSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cookieService.get('token')
      let newResquest = request
      newResquest = request.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      return next.handle(newResquest)
    } catch (error) {
      console.log('🔴🔴🔴 error', error)
      return next.handle(request);
    }
  }
}
