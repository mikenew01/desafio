import {Injectable, NgZone} from '@angular/core';
import {Location} from '@angular/common';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone,
    private location: Location
  ) {
  }

  default(message: string) {
    this.show(message, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['blue-snackbar']
    });
  }

  success(message: string, locationBack: boolean = false) {
    this.show(message, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success']
    });

    if (locationBack) {
      this.location.back();
    }
  }

  warn(message: string) {
    this.show(message, {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['yellow-snackbar']
    });
  }

  error(message: string, locationBack: boolean = false) {
    this.show(message, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['red-snackbar']
    });

    if (locationBack) {
      this.location.back();
    }
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    this.zone.run(() => this.snackBar.open(message, null, configuration));
  }
}
