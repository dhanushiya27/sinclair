import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontContactComponent } from './front-contact.component';

describe('FrontContactComponent', () => {
  let component: FrontContactComponent;
  let fixture: ComponentFixture<FrontContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FrontContactComponent]
    });
    fixture = TestBed.createComponent(FrontContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
