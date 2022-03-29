import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MockService } from './Services/mock.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadCrumbsComponent } from './static-nav-top/bread-crumbs/bread-crumbs.component';

@NgModule({
  declarations: [StaticNavTopComponent, StaticNavBotComponent,BreadCrumbsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),
    HttpClientModule,
  ],
  exports: [StaticNavTopComponent, StaticNavBotComponent, MatIconModule,CommonModule,BreadCrumbsComponent],
})
export class CoreModule {}
