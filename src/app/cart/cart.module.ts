import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBillingComponent } from './cart-billing/cart-billing.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartConfirmationComponent } from './cart-confirmation/cart-confirmation.component';
import { CartComponent } from './cart.component';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    CartBillingComponent,
    CartSummaryComponent,
    CartConfirmationComponent,
    CartComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    ProductsModule,
    
    
    
  ]
})
export class CartModule { }
