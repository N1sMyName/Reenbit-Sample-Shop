import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: CartComponent }])],
   exports: [RouterModule],
})
export class CartRoutingModule {}
