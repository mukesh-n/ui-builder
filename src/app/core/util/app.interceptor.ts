import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { StorageService } from '../service/storage.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptor implements HttpInterceptor {

  constructor(private _storageService: StorageService, private _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Request Intercept log");
    
    const Authorization = this._storageService.AuthToken$.getValue();
    return next.handle(request.clone({ setHeaders: { Authorization } })).pipe(
      catchError((error)=>{
        console.log("Response Intercept log");
        
        if(error.status == 401){
          this._authService.logout();
        }
        return throwError(()=>error);
      })
    );    
  }
}
