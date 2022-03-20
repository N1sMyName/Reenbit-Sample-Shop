import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { ProductsComponent } from './products/products.component';
import { Router } from '@angular/router';
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart',component:CartComponent,data:{hideFuter:true} },
  { path: 'products/:id',component:DescriptionComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class AppRoutingModule {
  constructor() {}
}
=======
export class AppRoutingModule {}
>>>>>>> 157f408 (basic structure + router)
