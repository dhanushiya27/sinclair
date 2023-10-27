import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFacilitiesComponent } from './front-facilities.component';

describe('FrontFacilitiesComponent', () => {
  let component: FrontFacilitiesComponent;
  let fixture: ComponentFixture<FrontFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FrontFacilitiesComponent]
    });
    fixture = TestBed.createComponent(FrontFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
