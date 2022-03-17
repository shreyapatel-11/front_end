import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiblingComponent } from './list-sibling.component';

describe('ListSiblingComponent', () => {
  let component: ListSiblingComponent;
  let fixture: ComponentFixture<ListSiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSiblingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
