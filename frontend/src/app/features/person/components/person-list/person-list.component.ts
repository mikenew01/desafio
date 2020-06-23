import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Person} from '../../../../shared/models/person.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'mcp-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'nameFather', 'nameMother', 'typePerson', 'dateBirth', 'loginOperator', 'actions'];
  dataSource: MatTableDataSource<Person>;

  @Input() itemsPerPagePagination: number[] = [10, 20, 30, 40, 50];

  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();

  @Input() persons: Person[] = [];

  typePersons = {
    PESSOA_FISICA: 'Pessoa Física',
    PESSOA_JURIDICA: 'Pessoa Jurídica'
  };

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Person>(this.persons);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  update(person: Person): void {
    this.onUpdate.emit(person);
  }

  create(): void {
    this.onCreate.emit();
  }

  delete(person: Person): void {
    this.onDelete.emit(person);
  }

  getTypePersonDescription(type: string): string {
    return this.typePersons[type];
  }

}
