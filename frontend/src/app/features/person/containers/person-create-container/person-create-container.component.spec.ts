import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreateContainerComponent } from './person-create-container.component';

describe('PersonCreateContainerComponent', () => {
  let component: PersonCreateContainerComponent;
  let fixture: ComponentFixture<PersonCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
