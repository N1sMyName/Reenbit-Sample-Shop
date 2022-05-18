import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {
  DxFormModule,
  DxButtonModule,
  DxValidatorModule,
  DxDataGridModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxTagBoxModule,
} from 'devextreme-angular';
import { AdminComponent } from './admin.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AdminComponent,
    CreateProductComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DxFormModule,
    DxButtonModule,
    DxValidatorModule,
    DxDataGridModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTagBoxModule,
  ],
  exports: [],
})
export class AdminModule {}
