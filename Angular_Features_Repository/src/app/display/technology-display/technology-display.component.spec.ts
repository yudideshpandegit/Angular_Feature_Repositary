import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDisplayComponent } from './technology-display.component';

describe('TechnologyDisplayComponent', () => {
  let component: TechnologyDisplayComponent;
  let fixture: ComponentFixture<TechnologyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
