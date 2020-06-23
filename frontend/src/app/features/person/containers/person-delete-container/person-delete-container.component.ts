import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as fromPerson from '../../store/reducers/person.reducer';
import {select, Store} from '@ngrx/store';
import {DeletePerson} from '../../store/actions/person.action';
import {Observable} from 'rxjs';
import {Person} from '../../../../shared/models/person.model';
import {selectPerson} from '../../store/selectors/person.selector';

@Component({
  selector: 'mcp-person-delete-container',
  templateUrl: './person-delete-container.component.html',
  styleUrls: ['./person-delete-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDeleteContainerComponent implements OnInit {

  constructor(private router: Router, private personStore: Store<fromPerson.State>) {
  }

  person$: Observable<Person>;

  ngOnInit(): void {
    this.person$ = this.personStore.pipe(select(selectPerson));
  }

  onCancel(): void {
    this.router.navigate(['/persons']);
  }

  onDelete(person: Person): void {
    this.personStore.dispatch(new DeletePerson({id: person.id}));
  }

}
