import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDeleteContainerComponent } from './person-delete-container.component';

describe('PersonDeleteContainerComponent', () => {
  let component: PersonDeleteContainerComponent;
  let fixture: ComponentFixture<PersonDeleteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDeleteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDeleteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
