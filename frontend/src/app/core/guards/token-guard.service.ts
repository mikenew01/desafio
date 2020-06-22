import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }


  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean | Promise<boolean> {
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      return true;
    }

    this.router.navigate(['/login'], {queryParams: {returnUrl: routerState.url}});
    return false;
  }
}
