import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListpageComponent } from './employee-listpage.component';

describe('EmployeeListpageComponent', () => {
  let component: EmployeeListpageComponent;
  let fixture: ComponentFixture<EmployeeListpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListpageComponent]
    });
    fixture = TestBed.createComponent(EmployeeListpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
