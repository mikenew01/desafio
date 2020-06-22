import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../../../shared/models/person.model';

@Component({
  selector: 'mcp-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {

  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  @Input() person: Person;

  constructor() {
  }

  ngOnInit() {
  }

  delete(person: Person): void {
    this.onDelete.emit(person);
  }

  cancel(): void {
    this.onCancel.emit();
  }

}
