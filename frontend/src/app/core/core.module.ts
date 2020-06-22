import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from './services/notification.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {StorageService} from './services/storage.service';
import {HttpInterceptorService} from './interceptors/http.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenGuardService} from './guards/token-guard.service';
import {ErrorInterceptor} from './interceptors/error.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    NotificationService,
    StorageService,
    HttpInterceptorService,
    TokenGuardService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  exports: []
})
export class CoreModule {
}
