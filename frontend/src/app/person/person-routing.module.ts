import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListContainerComponent} from './containers/person-list-container/person-list-container.component';


const routes: Routes = [
  {
    path: '',
    component: PersonListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
