import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEventComponent } from './users-event.component';

describe('UsersEventComponent', () => {
  let component: UsersEventComponent;
  let fixture: ComponentFixture<UsersEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
