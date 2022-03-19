import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavBotComponent } from './products-nav-bot.component';

describe('ProductsNavBotComponent', () => {
  let component: ProductsNavBotComponent;
  let fixture: ComponentFixture<ProductsNavBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNavBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNavBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
