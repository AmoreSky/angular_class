import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIENTDASHBOARD } from './client-dashboard';

describe('CLIENTDASHBOARD', () => {
  let component: CLIENTDASHBOARD;
  let fixture: ComponentFixture<CLIENTDASHBOARD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLIENTDASHBOARD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLIENTDASHBOARD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
