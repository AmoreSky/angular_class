import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOMEPAGE } from './homepage';

describe('HOMEPAGE', () => {
  let component: HOMEPAGE;
  let fixture: ComponentFixture<HOMEPAGE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HOMEPAGE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HOMEPAGE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
