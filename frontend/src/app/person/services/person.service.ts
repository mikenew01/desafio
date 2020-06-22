import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../../shared/models/person.model';
import {environment} from '../../../environments/environment';
import {Resposta} from '../../shared/models/resposta.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Resposta> {
    console.log('chamou');
    return this.http.get<Resposta>(`${environment.api}/persons`);
  }

  public save(person: Person): Observable<Resposta> {
    return this.http.post<Resposta>(`${environment.api}/persons`, person);
  }

  public update(id: number, person: Person): Observable<Resposta> {
    return this.http.put<Resposta>(`${environment.api}/persons/${id}`, person);
  }

  public delete(id: number): Observable<Resposta> {
    return this.http.delete<Resposta>(`${environment.api}/persons/${id}`);
  }

  public get(id: number): Observable<Resposta> {
    return this.http.get<Resposta>(`${environment.api}/persons/${id}`);
  }
}
