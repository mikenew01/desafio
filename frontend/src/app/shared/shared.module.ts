import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MenuComponent} from './components/menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [MenuComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    MenuComponent,
    LoginComponent
  ]
})
export class SharedModule {
}
