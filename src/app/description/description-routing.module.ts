import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver } from '../products/products.resolver';
import { DescriptionComponent } from './description.component';

const routes: Routes = [
  {
    path: '',
    component: DescriptionComponent,
    resolve: { relevant: ProductsResolver },
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionRoutingModule {}
