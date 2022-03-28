import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticNavTopComponent } from './static-nav-top/static-nav-top.component';
import { StaticNavBotComponent } from './static-nav-bot/static-nav-bot.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MockService } from './Services/mock.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StaticNavTopComponent, StaticNavBotComponent],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),
    HttpClientModule,
  ],
  exports: [StaticNavTopComponent, StaticNavBotComponent, MatIconModule,CommonModule],
})
export class CoreModule {}
