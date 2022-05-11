import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  DxFormComponent,
  DxValidationGroupComponent,
} from 'devextreme-angular';

import { cloneDeep, toPairs } from 'lodash';
import { AuthService } from 'src/app/Services/auth.service';
import { Product } from 'src/app/Services/db/Product.model';
import { ProfileService } from 'src/app/Services/profile.service';
import { StoreService } from 'src/app/Services/store.service';
import { EditProductService } from './edit-product.service';

// import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.sass'],
})
export class EditProductComponent implements OnInit {
  @Input() product: Product;
  mockProduct: Product;

  constructor(public store: StoreService, private auth: AuthService,public profile:ProfileService) {}

  ngOnInit(): void {
    this.mockProduct = cloneDeep(this.product);
  }
  submit(e: any) {
    console.log(`start`);
    this.store.rewriteProduct(this.auth.user, this.mockProduct);
    this.profile.toggleEditModal()
    e.preventDefault();
  }
}
