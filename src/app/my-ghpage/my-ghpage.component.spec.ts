import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGhpageComponent } from './my-ghpage.component';

describe('MyGhpageComponent', () => {
  let component: MyGhpageComponent;
  let fixture: ComponentFixture<MyGhpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGhpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGhpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
