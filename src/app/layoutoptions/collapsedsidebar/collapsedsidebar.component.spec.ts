import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsedsidebarComponent } from './collapsedsidebar.component';

describe('CollapsedsidebarComponent', () => {
  let component: CollapsedsidebarComponent;
  let fixture: ComponentFixture<CollapsedsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsedsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsedsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
