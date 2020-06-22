import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from './services/notification.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NotificationService],
  exports: []
})
export class CoreModule {
}
