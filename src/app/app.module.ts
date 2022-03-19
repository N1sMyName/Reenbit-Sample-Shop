import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { DescriptionModule } from './description/description.module';
import { CartModule } from './cart/cart.module';
import { AppComponent } from './app.component';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticNavTopComponent,
    StaticNavBotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
