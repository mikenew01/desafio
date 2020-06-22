import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonListContainerComponent } from './containers/person-list-container/person-list-container.component';
import { PersonListComponent } from './components/person-list/person-list.component';


@NgModule({
  declarations: [PersonListContainerComponent, PersonListComponent],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
