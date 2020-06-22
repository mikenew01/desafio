import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TokenGuardService} from './core/guards/token-guard.service';
import {LoginComponent} from './shared/components/login/login.component';
import {HomeComponent} from './shared/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [TokenGuardService]
  },
  {
    path: 'persons',
    loadChildren: () => import('./features/person/person.module').then(personModule => personModule.PersonModule),
    canActivate: [TokenGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
