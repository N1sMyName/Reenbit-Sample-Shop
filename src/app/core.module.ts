import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { BreadCrumbsComponent } from './static-nav-top/bread-crumbs/bread-crumbs.component';
import { NavCategoriesBarComponent } from './static-nav-top/nav-categories-bar/nav-categories-bar.component';
import { SearchBarComponent } from './static-nav-top/search-bar/search-bar.component';
import { CategoriesDropDownComponent } from './static-nav-top/search-bar/categories-drop-down.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CSlicePipe } from './products/c-slice.pipe';


@NgModule({
  declarations: [
    StaticNavTopComponent,
    StaticNavBotComponent,
    BreadCrumbsComponent,
    NavCategoriesBarComponent,
    SearchBarComponent,
    CategoriesDropDownComponent,
    CSlicePipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    StaticNavTopComponent,
    StaticNavBotComponent,
    MatIconModule,
    CommonModule,
    BreadCrumbsComponent,
    ReactiveFormsModule,
    NgxSliderModule,
    CSlicePipe
    
  ],
})
export class CoreModule {}
