import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../../../shared/models/person.model';
import {environment} from '../../../../environments/environment';
import {Operator} from '../../../shared/models/operator.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Operator[]> {
    return this.http.get<Operator[]>(`${environment.api}/operators`);
  }

  public save(operator: Operator): Observable<Operator> {
    return this.http.post<Operator>(`${environment.api}/operators`, operator);
  }

  public update(operator: Person): Observable<Operator> {
    return this.http.put<Operator>(`${environment.api}/operators/${operator.id}`, operator);
  }

  public delete(id: number): Observable<Operator> {
    return this.http.delete<Operator>(`${environment.api}/operators/${id}`);
  }

  public get(id: number): Observable<Operator> {
    return this.http.get<Operator>(`${environment.api}/operators/${id}`);
  }
}
