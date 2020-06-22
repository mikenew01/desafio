import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonRoutingModule} from './person-routing.module';
import {PersonListContainerComponent} from './containers/person-list-container/person-list-container.component';
import {PersonListComponent} from './components/person-list/person-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [PersonListContainerComponent, PersonListComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PersonModule {
}
