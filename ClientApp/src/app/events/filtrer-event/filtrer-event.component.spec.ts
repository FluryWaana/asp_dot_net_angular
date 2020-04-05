import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrerEventComponent } from './filtrer-event.component';

describe('FiltrerEventComponent', () => {
  let component: FiltrerEventComponent;
  let fixture: ComponentFixture<FiltrerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrerEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
