import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyemployeeComponent } from './onlyemployee.component';

describe('OnlyemployeeComponent', () => {
  let component: OnlyemployeeComponent;
  let fixture: ComponentFixture<OnlyemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyemployeeComponent]
    });
    fixture = TestBed.createComponent(OnlyemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
