import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromPerson from '../../store/reducers/person.reducer';
import {Observable} from 'rxjs';
import {Person} from '../../../shared/models/person.model';
import {selectAllPersons} from '../../store/selectors/person.selector';
import {Router} from '@angular/router';

@Component({
  selector: 'mcp-person-list-container',
  templateUrl: './person-list-container.component.html',
  styleUrls: ['./person-list-container.component.scss']
})
export class PersonListContainerComponent implements OnInit {

  persons$: Observable<Person[]>;

  constructor(private personStore: Store<fromPerson.State>, private router: Router) {
    this.persons$ = personStore.pipe(select(selectAllPersons));
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    const url = `/persons/create`;
    this.router.navigate([url]);
  }

  onDelete(person: Person): void {
    const url = `/persons/delete/${person.id}`;
    this.router.navigate([url]);
  }

  onUpdate(person: Person): void {
    const url = `/persons/update/${person.id}`;
    this.router.navigate([url]);
  }

  onDetail(person: Person): void {
    const url = `/persons/detail/${person.id}`;
    this.router.navigate([url]);
  }

}
