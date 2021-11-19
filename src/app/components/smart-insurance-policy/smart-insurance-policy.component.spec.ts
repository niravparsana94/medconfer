import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInsurancePolicyComponent } from './smart-insurance-policy.component';

describe('SmartInsurancePolicyComponent', () => {
  let component: SmartInsurancePolicyComponent;
  let fixture: ComponentFixture<SmartInsurancePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartInsurancePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartInsurancePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
