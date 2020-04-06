import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyEventsComponent } from './add-my-events.component';

describe('AddMyEventsComponent', () => {
  let component: AddMyEventsComponent;
  let fixture: ComponentFixture<AddMyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
