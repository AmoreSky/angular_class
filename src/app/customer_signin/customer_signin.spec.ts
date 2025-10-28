import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOMERSIGNIN } from './customer_signin';

describe('CUSTOMERSIGNIN', () => {
  let component: CUSTOMERSIGNIN;
  let fixture: ComponentFixture<CUSTOMERSIGNIN>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUSTOMERSIGNIN]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CUSTOMERSIGNIN);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
