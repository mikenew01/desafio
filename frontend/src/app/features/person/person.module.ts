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
import {PersonDetailContainerComponent} from './containers/person-detail-container/person-detail-container.component';
import {PersonUpdateContainerComponent} from './containers/person-update-container/person-update-container.component';
import {PersonDeleteContainerComponent} from './containers/person-delete-container/person-delete-container.component';
import {PersonCreateContainerComponent} from './containers/person-create-container/person-create-container.component';
import {PersonCreateComponent} from './components/person-create/person-create.component';
import {PersonUpdateComponent} from './components/person-update/person-update.component';
import {PersonDeleteComponent} from './components/person-delete/person-delete.component';
import {PersonDetailComponent} from './components/person-detail/person-detail.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [PersonListContainerComponent,
    PersonListComponent,
    PersonDetailContainerComponent,
    PersonUpdateContainerComponent,
    PersonDeleteContainerComponent,
    PersonCreateContainerComponent,
    PersonCreateComponent,
    PersonUpdateComponent,
    PersonDeleteComponent,
    PersonDetailComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
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
    HttpClientModule,
    MatOptionModule,
    MatSelectModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PersonModule {
}
