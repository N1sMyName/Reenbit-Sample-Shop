import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DescriptionService } from 'src/app/description/description.service';

import { AuthService } from 'src/app/Services/auth.service';
import { Product } from 'src/app/Services/db/Product.model';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent {
  @Input() product: Product;
  noTaxPrice = 0
  productDetails: string;

  constructor(
    private router: Router,
    public auth: AuthService,
    public profile: ProfileService,
    private description:DescriptionService
  ) {}

  showProductDetails(id: number) {
    this.productDetails = `/products`;
    this.router.navigate([this.productDetails, id]);
  }
  calculateSubTotal() {
    if (this.price && this.price > 0) {
      this.description.tax = Math.floor(this.price * this.description.rate);
      this.noTaxPrice = this.price - this.description.tax;
    }
  }
  get price() {
    return this.product.price;
  }
  ngOnInit(){
    this.calculateSubTotal()

  }
}
