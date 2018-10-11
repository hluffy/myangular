import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutoptionsComponent } from './layoutoptions.component';

describe('LayoutoptionsComponent', () => {
  let component: LayoutoptionsComponent;
  let fixture: ComponentFixture<LayoutoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
