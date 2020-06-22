import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListContainerComponent } from './person-list-container.component';

describe('PersonListContainerComponent', () => {
  let component: PersonListContainerComponent;
  let fixture: ComponentFixture<PersonListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
