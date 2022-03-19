import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ProductsNavTopComponent } from './products-nav-top/products-nav-top.component';
import { ProductsNavBotComponent } from './products-nav-bot/products-nav-bot.component';



@NgModule({
  declarations: [
    
  
    ProductsComponent,
            ProductsListComponent,
            ProductsFiltersComponent,
            ProductsNavTopComponent,
            ProductsNavBotComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
