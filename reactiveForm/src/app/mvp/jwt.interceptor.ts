import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MvpService } from './mvp.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  token: string = "Fake Token";
  constructor(private mvpService: MvpService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem('token') ?? "Fake Token";
    return next.handle(request.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.token}`
      }
    }));
  }
}
