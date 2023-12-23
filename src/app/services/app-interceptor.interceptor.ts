import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable} from 'rxjs';
import {AppStateService} from "./app-state.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private  appState: AppStateService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.appState.productState.status= "Loading"
    let req = request.clone({
      headers: request.headers.set("Authorization","Bearer JWT")
    });
    return  next.handle(req).pipe(
      finalize(()=>{
        this.appState.productState.status="Loaded"
      })
    )

  }
}
