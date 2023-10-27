import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCourseComponent } from './front-course.component';

describe('FrontCourseComponent', () => {
  let component: FrontCourseComponent;
  let fixture: ComponentFixture<FrontCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FrontCourseComponent]
    });
    fixture = TestBed.createComponent(FrontCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
