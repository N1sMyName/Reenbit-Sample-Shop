import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin/admin.guard';
import { ProductsResolver } from '../products/products.resolver';
import { ShoppingHistoryResolver } from './shopping-history.resolver';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingHistoryComponent,
    canActivate: [AdminGuard],
    resolve: [ShoppingHistoryResolver,ProductsResolver],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingHistoryRoutingModule {}
