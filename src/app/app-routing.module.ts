import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';
import { ProductResolver } from './products/products-list/product/product.resolver';
const routes: Routes = [
  {
    path: 'products',
    data: { breadCrumb: 'products' },
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'admin',
    data: { breadCrumb: 'admin' },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    data: { hideFooter: true },
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
