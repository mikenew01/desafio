import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {selectPersonLoaded} from '../selectors/person.selector';
import {GetAllPersons} from '../actions/person.action';
import * as fromPerson from '../reducers/person.reducer';

@Injectable()
export class PersonListResolver implements Resolve<boolean> {
  constructor(private store: Store<fromPerson.State>) {
  }

  resolve(): Observable<boolean> {
    const loaded$ = this.store.pipe(select(selectPersonLoaded));

    return loaded$.pipe(
      filter(loaded => {
        if (loaded === false) {
          this.store.dispatch(new GetAllPersons());
        }

        return loaded;
      }),
      take(1)
    );
  }
}
