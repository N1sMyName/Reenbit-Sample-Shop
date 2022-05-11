import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './products-list/product/product.resolver';
import { ProductsComponent } from './products.component';
import { ProductsResolver } from './products.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: { 'products': ProductsResolver },
  },
  {
    path: ':id',
    data:{breadCrumb:(data:any)=> `${data.product[0].title}`},
    loadChildren: () =>
      import('../description/description.module').then(
        (m) => m.DescriptionModule
      ),
      resolve: {'product':ProductResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
