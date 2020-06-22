import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {selectPerson} from '../selectors/person.selector';
import {GetPerson} from '../actions/person.action';
import {Person} from '../../../../shared/models/person.model';

@Injectable()
export class PersonGetResolver implements Resolve<Person> {
  constructor(private store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    const entity$ = this.store.pipe(select(selectPerson, {id: route.params.id}));

    return entity$.pipe(
      filter(entity => {
        if (!entity) {
          this.store.dispatch(new GetPerson({id: route.params.id}));
        }

        return !!entity;
      }),

      take(1)
    );
  }
}
