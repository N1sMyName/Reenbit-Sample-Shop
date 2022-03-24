import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ProductsNavTopComponent } from './products-nav-top/products-nav-top.component';
import { ProductsNavBotComponent } from './products-nav-bot/products-nav-bot.component';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';
import { ProductComponent } from './products-list/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NavSelectComponent } from './static-nav-top/nav-select/nav-select.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsFiltersComponent,
    ProductsNavTopComponent,
    ProductsNavBotComponent,
    StaticNavBotComponent,
    StaticNavTopComponent,
    ProductComponent,
    NavSelectComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [StaticNavTopComponent, StaticNavBotComponent],
})
export class ProductsModule {}
