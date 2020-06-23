import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromPerson from '../../store/reducers/person.reducer';
import {Router} from '@angular/router';
import {Person} from '../../../../shared/models/person.model';
import {UpdatePerson} from '../../store/actions/person.action';
import {Observable} from 'rxjs';
import {selectPerson} from '../../store/selectors/person.selector';

@Component({
  selector: 'mcp-person-update-container',
  templateUrl: './person-update-container.component.html',
  styleUrls: ['./person-update-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonUpdateContainerComponent implements OnInit {

  person$: Observable<Person>;

  constructor(private personStore: Store<fromPerson.State>,
              private router: Router) {
  }

  ngOnInit(): void {
    this.person$ = this.personStore.pipe(select(selectPerson));
  }

  onUpdate(person: Person): void {
    console.log('att', person);
    this.personStore.dispatch(new UpdatePerson({person}));
  }

  onCancel(): void {
    this.router.navigate(['/persons']);
  }

}
