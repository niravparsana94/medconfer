import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHealthCheckupComponent } from './smart-health-checkup.component';

describe('SmartHealthCheckupComponent', () => {
  let component: SmartHealthCheckupComponent;
  let fixture: ComponentFixture<SmartHealthCheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartHealthCheckupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHealthCheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
