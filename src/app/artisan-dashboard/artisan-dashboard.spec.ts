import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARTISANDASHBOARD } from './artisan-dashboard';

describe('ARTISANDASHBOARD', () => {
  let component: ARTISANDASHBOARD;
  let fixture: ComponentFixture<ARTISANDASHBOARD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARTISANDASHBOARD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARTISANDASHBOARD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
