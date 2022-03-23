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

  constructor(private mvpService: MvpService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("call done",request.url);
    
    return next.handle(request);
  }
}
