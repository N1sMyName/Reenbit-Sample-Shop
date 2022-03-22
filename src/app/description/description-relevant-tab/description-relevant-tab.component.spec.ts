import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionRelevantTabComponent } from './description-relevant-tab.component';

describe('DescriptionRelevantTabComponent', () => {
  let component: DescriptionRelevantTabComponent;
  let fixture: ComponentFixture<DescriptionRelevantTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionRelevantTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionRelevantTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
