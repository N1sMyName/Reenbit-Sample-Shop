import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ProductsNavTopComponent } from './products-nav-top/products-nav-top.component';
import { ProductsNavBotComponent } from './products-nav-bot/products-nav-bot.component';
import { ProductComponent } from './products-list/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

import { CoreModule } from '../core.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsFiltersComponent,
    ProductsNavTopComponent,
    ProductsNavBotComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, CoreModule],
  exports: [],
})
export class ProductsModule {}
