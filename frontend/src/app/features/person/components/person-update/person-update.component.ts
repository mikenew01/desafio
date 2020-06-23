import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../../../shared/models/person.model';

export interface ItemSelectAction {
  value: string;
  description: string;
}


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

  maxDate = new Date();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.updateForm();
  }

  updateForm(): void {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(this.person.id, []),
      name: new FormControl(this.person.name, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      nameFather: new FormControl(this.person.nameFather, [Validators.minLength(1), Validators.maxLength(100)]),
      nameMother: new FormControl(this.person.nameMother, [Validators.minLength(1), Validators.maxLength(100)]),
      document: new FormControl(this.person.document, [Validators.required, Validators.minLength(10), Validators.maxLength(18)]),
      dateBirth: new FormControl(this.person.dateBirth, [Validators.required]),
      typePerson: new FormControl(this.person.typePerson, [Validators.required]),
      loginOperator: new FormControl(this.person.loginOperator, [])
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
