import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Person} from '../../../../shared/models/person.model';
import {ItemSelectAction} from '../person-create/person-create.component';

@Component({
  selector: 'mcp-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.scss']
})
export class PersonUpdateComponent implements OnInit {

  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  @Input() person: Person;

  formGroup: FormGroup;

  optionsActionsList: ItemSelectAction[] = [
    {value: 'PESSOA_FISICA', description: 'Pessoa Física'},
    {value: 'PESSOA_JURIDICA', description: 'Pessoa Jurídica'}
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.updateForm();
  }

  updateForm(): void {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(this.person.id, []),
      name: new FormControl(this.person.name, []),
      nameFather: new FormControl(this.person.nameFather, []),
      nameMother: new FormControl(this.person.nameMother, []),
      document: new FormControl(this.person.document, []),
      dateBirth: new FormControl(this.person.dateBirth, []),
      typePerson: new FormControl(this.person.typePerson, [])
    });
  }

  update(person: Person): void {
    this.onUpdate.emit(person);
  }

  cancel(): void {
    this.onCancel.emit();
  }

  hasErros(controlName: string, errorName: string): any {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

}
