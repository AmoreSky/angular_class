import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceDetails } from './view-service-details';

describe('ViewServiceDetails', () => {
  let component: ViewServiceDetails;
  let fixture: ComponentFixture<ViewServiceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewServiceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServiceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
