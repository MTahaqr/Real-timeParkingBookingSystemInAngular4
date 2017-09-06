import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADFeedbackComponent } from './adfeedback.component';

describe('ADFeedbackComponent', () => {
  let component: ADFeedbackComponent;
  let fixture: ComponentFixture<ADFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
