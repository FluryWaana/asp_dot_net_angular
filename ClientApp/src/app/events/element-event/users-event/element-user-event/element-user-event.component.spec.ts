import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementUserEventComponent } from './element-user-event.component';

describe('ElementUserEventComponent', () => {
  let component: ElementUserEventComponent;
  let fixture: ComponentFixture<ElementUserEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementUserEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementUserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
