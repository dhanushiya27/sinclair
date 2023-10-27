import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCampusComponent } from './front-campus.component';

describe('FrontCampusComponent', () => {
  let component: FrontCampusComponent;
  let fixture: ComponentFixture<FrontCampusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FrontCampusComponent]
    });
    fixture = TestBed.createComponent(FrontCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
