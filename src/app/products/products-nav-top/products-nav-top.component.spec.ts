import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavTopComponent } from './products-nav-top.component';

describe('ProductsNavTopComponent', () => {
  let component: ProductsNavTopComponent;
  let fixture: ComponentFixture<ProductsNavTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNavTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNavTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
