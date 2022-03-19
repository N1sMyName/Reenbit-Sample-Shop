import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBillingComponent } from './cart-billing.component';

describe('CartBillingComponent', () => {
  let component: CartBillingComponent;
  let fixture: ComponentFixture<CartBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
