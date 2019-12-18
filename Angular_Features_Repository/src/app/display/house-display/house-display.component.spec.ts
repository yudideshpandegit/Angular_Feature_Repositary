import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDisplayComponent } from './house-display.component';

describe('HouseDisplayComponent', () => {
  let component: HouseDisplayComponent;
  let fixture: ComponentFixture<HouseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
