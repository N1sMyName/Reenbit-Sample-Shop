import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionImagesComponent } from './description-images.component';

describe('DescriptionImagesComponent', () => {
  let component: DescriptionImagesComponent;
  let fixture: ComponentFixture<DescriptionImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
