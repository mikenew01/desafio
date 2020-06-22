import {Component} from '@angular/core';

@Component({
  selector: 'mcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MCP - Desafio';

  habilitarMenu = false;

  constructor() {
    const currentUser = localStorage.getItem('currentUser');
    this.habilitarMenu = !!currentUser;
  }
}
