import { NgModule } from '@angular/core';
import { CartBillingComponent } from './cart-billing/cart-billing.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartConfirmationComponent } from './cart-confirmation/cart-confirmation.component';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [
    CartBillingComponent,
    CartSummaryComponent,
    CartConfirmationComponent,
    CartComponent,
    CartProductComponent,
  ],
  imports: [ CartRoutingModule,CoreModule],
})
export class CartModule {}
