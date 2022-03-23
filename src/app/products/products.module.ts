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


@NgModule({
  declarations: [
    
  
    ProductsComponent,
            ProductsListComponent,
            ProductsFiltersComponent,
            ProductsNavTopComponent,
            ProductsNavBotComponent,
            StaticNavBotComponent,
            StaticNavTopComponent,
            ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[StaticNavTopComponent,StaticNavBotComponent]
})
export class ProductsModule { }
