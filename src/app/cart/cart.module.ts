import { NgModule } from '@angular/core';
import { CartBillingComponent } from './cart-billing/cart-billing.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartConfirmationComponent } from './cart-confirmation/cart-confirmation.component';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartBillingComponent,
    CartSummaryComponent,
    CartConfirmationComponent,
    CartComponent,
  ],
  imports: [ CartRoutingModule],
})
export class CartModule {}
