import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticNavBotComponent } from './static-nav-bot.component';

describe('StaticNavBotComponent', () => {
  let component: StaticNavBotComponent;
  let fixture: ComponentFixture<StaticNavBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticNavBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticNavBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
