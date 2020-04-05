import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ElementCategoryComponent} from './element-category.component';

describe('ElementCategoryComponent', () => {
  let component: ElementCategoryComponent;
  let fixture: ComponentFixture<ElementCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementCategoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
