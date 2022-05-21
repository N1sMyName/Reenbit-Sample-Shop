import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingHistoryRoutingModule } from './shopping-history-routing.module';
import { ShoppingHistoryComponent } from './shopping-history/shopping-history.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { SummaryPipe } from './summary.pipe';
import { MultiplyPipe } from './multiply.pipe';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [ShoppingHistoryComponent, SummaryPipe, MultiplyPipe],
  imports: [
    CommonModule,
    ShoppingHistoryRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
  ],
})
export class ShoppingHistoryModule {}
