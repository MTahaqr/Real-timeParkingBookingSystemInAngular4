import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilleniumComponent } from './millenium.component';

describe('MilleniumComponent', () => {
  let component: MilleniumComponent;
  let fixture: ComponentFixture<MilleniumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilleniumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilleniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
