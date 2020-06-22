import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('passou interceptor');
    const currentUserValue = this.authService.currentUserValue;

    if (currentUserValue && currentUserValue.token) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${currentUserValue.token}`)
      });
    }

    return next.handle(request);
  }
}
