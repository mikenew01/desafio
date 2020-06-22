import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonUpdateContainerComponent } from './person-update-container.component';

describe('PersonUpdateContainerComponent', () => {
  let component: PersonUpdateContainerComponent;
  let fixture: ComponentFixture<PersonUpdateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonUpdateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonUpdateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
