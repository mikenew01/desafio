import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListContainerComponent} from './containers/person-list-container/person-list-container.component';
import {PersonListResolver} from './store/resolvers/person-list.resolver';


const routes: Routes = [
  {
    path: '',
    component: PersonListContainerComponent,
    resolve: {
      person: PersonListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PersonListResolver
  ]
})
export class PersonRoutingModule {
}
