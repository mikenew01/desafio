import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';
import {InforOperator} from '../../models/infor-operator.model';

@Component({
  selector: 'mcp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentUser: InforOperator;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.currentUserValueObservable.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.authService.logout();
  }


}
