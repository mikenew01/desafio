import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppEffects} from './app.effects';
import {metaReducers, reducers} from './reducers';
import {SharedModule} from './shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PersonEffects} from './person/store/effects/person.effect';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([
      AppEffects,
      PersonEffects
    ]),
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
