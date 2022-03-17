import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSiblingComponent } from './form-sibling.component';

describe('FormSiblingComponent', () => {
  let component: FormSiblingComponent;
  let fixture: ComponentFixture<FormSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSiblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
