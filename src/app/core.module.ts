import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MockService } from './Services/mock.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadCrumbsComponent } from './static-nav-top/bread-crumbs/bread-crumbs.component';
import { NavCategoriesBarComponent } from './static-nav-top/nav-categories-bar/nav-categories-bar.component';
import { SearchBarComponent } from './static-nav-top/search-bar/search-bar.component';

@NgModule({
  declarations: [
    StaticNavTopComponent,
    StaticNavBotComponent,
    BreadCrumbsComponent,
    NavCategoriesBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),
    HttpClientModule,
  ],
  exports: [
    StaticNavTopComponent,
    StaticNavBotComponent,
    MatIconModule,
    CommonModule,
    BreadCrumbsComponent,
  ],
})
export class CoreModule {}
