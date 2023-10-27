import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTestimonialsComponent } from './front-testimonials.component';

describe('FrontTestimonialsComponent', () => {
  let component: FrontTestimonialsComponent;
  let fixture: ComponentFixture<FrontTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FrontTestimonialsComponent]
    });
    fixture = TestBed.createComponent(FrontTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
