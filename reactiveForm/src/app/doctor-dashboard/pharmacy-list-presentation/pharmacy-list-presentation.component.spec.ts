import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyListPresentationComponent } from './pharmacy-list-presentation.component';

describe('PharmacyListPresentationComponent', () => {
  let component: PharmacyListPresentationComponent;
  let fixture: ComponentFixture<PharmacyListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
