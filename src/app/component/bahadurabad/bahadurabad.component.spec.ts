import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BahadurabadComponent } from './bahadurabad.component';

describe('BahadurabadComponent', () => {
  let component: BahadurabadComponent;
  let fixture: ComponentFixture<BahadurabadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BahadurabadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BahadurabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
