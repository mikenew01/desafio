import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListContainerComponent} from './containers/person-list-container/person-list-container.component';
import {PersonListResolver} from './store/resolvers/person-list.resolver';
import {PersonGetResolver} from './store/resolvers/person-get.resolver';
import {PersonUpdateContainerComponent} from './containers/person-update-container/person-update-container.component';
import {PersonDeleteContainerComponent} from './containers/person-delete-container/person-delete-container.component';
import {PersonDetailContainerComponent} from './containers/person-detail-container/person-detail-container.component';
import {PersonCreateContainerComponent} from './containers/person-create-container/person-create-container.component';


const routes: Routes = [
  {
    path: '',
    component: PersonListContainerComponent,
    resolve: {
      person: PersonListResolver
    }
  },
  {
    path: 'update/:id',
    component: PersonUpdateContainerComponent,
    resolve: {
      person: PersonGetResolver
    }
  },
  {
    path: 'delete/:id',
    component: PersonDeleteContainerComponent,
    resolve: {
      person: PersonGetResolver
    }
  },
  {
    path: 'detail/:id',
    component: PersonDetailContainerComponent,
    resolve: {
      person: PersonGetResolver
    }
  },
  {
    path: 'create',
    component: PersonCreateContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PersonListResolver,
    PersonGetResolver
  ]
})
export class PersonRoutingModule {
}
