import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIDEBAR } from './side-bar';

describe('SIDEBAR', () => {
  let component: SIDEBAR;
  let fixture: ComponentFixture<SIDEBAR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SIDEBAR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SIDEBAR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
