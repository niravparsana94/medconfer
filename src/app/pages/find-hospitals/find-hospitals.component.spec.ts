import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHospitalsComponent } from './find-hospitals.component';

describe('HospitalsComponent', () => {
  let component: FindHospitalsComponent;
  let fixture: ComponentFixture<FindHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
