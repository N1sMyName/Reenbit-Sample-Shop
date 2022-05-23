import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsNavTopComponent } from './products-nav-top/products-nav-top.component';
import { ProductsNavBotComponent } from './products-nav-bot/products-nav-bot.component';
import { ProductComponent } from './products-list/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';

import { CoreModule } from '../core.module';
import { ProductsFiltersModule } from './products-filters/products-filters.module';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsNavTopComponent,
    ProductsNavBotComponent,
    ProductComponent,
    
    
    
    
  ],
  imports: [
    ProductsRoutingModule,
    CoreModule,
    ProductsFiltersModule,
    NgxPaginationModule,
    
    
    
  ],
  exports: [],
  providers: [],
})
export class ProductsModule {}
