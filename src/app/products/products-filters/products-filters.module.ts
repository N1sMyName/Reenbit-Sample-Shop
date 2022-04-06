import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFiltersComponent } from './products-filters.component';
import { CategoriesFilterComponent } from './categories-filter/categories-filter.component';
import { BrandFilterComponent } from './brand-filter/brand-filter.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { RatingFilterComponent } from './rating-filter/rating-filter.component';
import { CategoriesSorterPipe } from './categories-filter/categories-sorter.pipe';
import { CoreModule } from 'src/app/core.module';

@NgModule({
  declarations: [
    ProductsFiltersComponent,
    CategoriesFilterComponent,
    BrandFilterComponent,
    PriceFilterComponent,
    RatingFilterComponent,
    CategoriesSorterPipe,
  ],
  imports: [CommonModule, CoreModule],
  exports: [ProductsFiltersComponent],
})
export class ProductsFiltersModule {}
