import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Person} from '../../../shared/models/person.model';

export interface ItemSelectAction {
  value: string;
  description: string;
}

@Component({
  selector: 'mcp-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;

  optionsActionsList: ItemSelectAction[] = [
    {value: 'PESSOA_FISICA', description: 'Pessoa Física'},
    {value: 'PESSOA_JURIDICA', description: 'Pessoa Jurídica'}
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', []),
      nameFather: new FormControl('', []),
      nameMother: new FormControl('', []),
      document: new FormControl('', []),
      dateBirth: new FormControl('', []),
      typePerson: new FormControl([''], [])
    });
  }

  create(person: Person): void {
    this.onCreate.emit(person);
  }

  cancel(): void {
    this.onCancel.emit();
  }

  hasErros(controlName: string, errorName: string): any {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

}
