import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEventComponent } from './ajouter-event.component';

describe('AjouterEventComponent', () => {
  let component: AjouterEventComponent;
  let fixture: ComponentFixture<AjouterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
