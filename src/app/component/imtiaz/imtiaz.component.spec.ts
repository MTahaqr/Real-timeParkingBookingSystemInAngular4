import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImtiazComponent } from './imtiaz.component';

describe('ImtiazComponent', () => {
  let component: ImtiazComponent;
  let fixture: ComponentFixture<ImtiazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImtiazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImtiazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
