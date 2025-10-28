import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADMINDASHBOARD } from './admin-dashboard';

describe('ADMINDASHBOARD', () => {
  let component: ADMINDASHBOARD;
  let fixture: ComponentFixture<ADMINDASHBOARD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADMINDASHBOARD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADMINDASHBOARD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
