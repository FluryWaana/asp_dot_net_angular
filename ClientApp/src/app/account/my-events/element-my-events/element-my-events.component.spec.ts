import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementMyEventsComponent } from './element-my-events.component';

describe('ElementMyEventsComponent', () => {
  let component: ElementMyEventsComponent;
  let fixture: ComponentFixture<ElementMyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementMyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementMyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
