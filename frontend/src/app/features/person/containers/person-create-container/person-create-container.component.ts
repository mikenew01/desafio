import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Person} from '../../../../shared/models/person.model';
import {Store} from '@ngrx/store';
import * as fromPerson from '../../store/reducers/person.reducer';
import {CreatePerson} from '../../store/actions/person.action';
import {Router} from '@angular/router';

@Component({
  selector: 'mcp-person-create-container',
  templateUrl: './person-create-container.component.html',
  styleUrls: ['./person-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonCreateContainerComponent implements OnInit {

  constructor(private personStore: Store<fromPerson.State>,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onCreate(person: Person): void {
    this.personStore.dispatch(new CreatePerson({person}));
  }

  onCancel(): void {
    this.router.navigate(['/persons']);
  }

}
