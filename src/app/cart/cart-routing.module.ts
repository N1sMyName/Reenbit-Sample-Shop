import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartResolver } from './cart.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent,
        data: { breadCrumb: 'cart' },
        resolve: { cart: CartResolver },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CartRoutingModule {}
