import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import * as jwt_decode from 'jwt-decode';
import {InforOperator} from '../../shared/models/infor-operator.model';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<InforOperator>;
  public currentUser: Observable<InforOperator>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<InforOperator>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): InforOperator {
    return this.currentUserSubject.value;
  }

  login(login, password) {
    return this.http.post<any>(`${environment.api}/auth/login`, {login, password})
      .pipe(map(response => {
        const {token} = response;
        const {groups, sub} = jwt_decode(token);
        const operator = {login: sub, role: groups[0], token};
        localStorage.setItem('currentUser', JSON.stringify(operator));
        console.log('currentUser', localStorage.getItem('currentUser'));
        this.currentUserSubject.next(operator);
        return operator;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
