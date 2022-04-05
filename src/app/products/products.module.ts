import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ProductsNavTopComponent } from './products-nav-top/products-nav-top.component';
import { ProductsNavBotComponent } from './products-nav-bot/products-nav-bot.component';
import { ProductComponent } from './products-list/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

import { CoreModule } from '../core.module';
import { CategoriesFilterComponent } from './products-filters/categories-filter/categories-filter.component';
import { BrandFilterComponent } from './products-filters/brand-filter/brand-filter.component';
import { PriceFilterComponent } from './products-filters/price-filter/price-filter.component';
import { RatingFilterComponent } from './products-filters/rating-filter/rating-filter.component';
import { CategoriesSorterPipe } from './products-filters/categories-filter/categories-sorter.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsFiltersComponent,
    ProductsNavTopComponent,
    ProductsNavBotComponent,
    ProductComponent,
    CategoriesFilterComponent,
    BrandFilterComponent,
    PriceFilterComponent,
    RatingFilterComponent,
    CategoriesSorterPipe,
  ],
  imports: [ProductsRoutingModule, CoreModule],
  exports: [],
})
export class ProductsModule {}
