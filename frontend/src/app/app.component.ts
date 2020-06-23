import {Component} from '@angular/core';
import {InforOperator} from './shared/models/infor-operator.model';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'mcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUser: InforOperator;

  constructor(private authService: AuthService) {
    authService.currentUserValueObservable.subscribe(user => this.currentUser = user);
  }

}
