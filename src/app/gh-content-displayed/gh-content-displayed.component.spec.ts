import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhContentDisplayedComponent } from './gh-content-displayed.component';

describe('GhContentDisplayedComponent', () => {
  let component: GhContentDisplayedComponent;
  let fixture: ComponentFixture<GhContentDisplayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhContentDisplayedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhContentDisplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
