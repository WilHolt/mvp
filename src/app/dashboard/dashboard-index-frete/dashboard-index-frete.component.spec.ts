import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexFreteComponent } from './dashboard-index-frete.component';

describe('DashboardIndexFreteComponent', () => {
  let component: DashboardIndexFreteComponent;
  let fixture: ComponentFixture<DashboardIndexFreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIndexFreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
