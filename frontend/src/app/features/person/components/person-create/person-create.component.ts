import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../../../shared/models/person.model';

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

  maxDate = new Date();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      nameFather: new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]),
      nameMother: new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]),
      document: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(18)]),
      dateBirth: new FormControl('', [Validators.required]),
      typePerson: new FormControl([''], [Validators.required])
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
