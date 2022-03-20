import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticNavTopComponent } from './static-nav-top.component';

describe('StaticNavTopComponent', () => {
  let component: StaticNavTopComponent;
  let fixture: ComponentFixture<StaticNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticNavTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
