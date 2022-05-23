import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver } from '../products/products.resolver';

import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    resolve:{'products':ProductsResolver},
    canActivate:[AdminGuard]
  },
  {
    path: 'create', 
    component: CreateProductComponent,
    data:{breadCrumb:'create'},
    resolve:{'products':ProductsResolver},
    canActivate:[AdminGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
