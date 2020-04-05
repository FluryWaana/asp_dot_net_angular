import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEventComponent } from './element-event.component';

describe('ElementEventComponent', () => {
  let component: ElementEventComponent;
  let fixture: ComponentFixture<ElementEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
