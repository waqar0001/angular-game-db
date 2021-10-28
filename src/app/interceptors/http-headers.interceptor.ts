import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'e541adbea7msh4dca32f83f6bf50p1cf16cjsn55c31b652468',
      },
      setParams: {
        key: '78e8d4e96ee04ac9b71303c13cc105a6',
      },
    });
    return next.handle(req);
  }
}
