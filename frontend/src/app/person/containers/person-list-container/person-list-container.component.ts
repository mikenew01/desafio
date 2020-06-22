import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromPerson from '../../store/reducers/person.reducer';
import {Observable} from 'rxjs';
import {Person} from '../../../shared/models/person.model';
import {selectAllPersons} from '../../store/selectors/person.selector';

@Component({
  selector: 'mcp-person-list-container',
  templateUrl: './person-list-container.component.html',
  styleUrls: ['./person-list-container.component.scss']
})
export class PersonListContainerComponent implements OnInit {

  persons$: Observable<Person[]>;

  constructor(private personStore: Store<fromPerson.State>) {
    this.persons$ = personStore.pipe(select(selectAllPersons));
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    console.log('Criar');
  }

  onDelete(person: Person): void {
    console.log('Deletar');
  }

  onUpdate(person: Person): void {
    console.log('Update');
  }

  onDetail(person: Person): void {
    console.log('Detail');
  }

}
