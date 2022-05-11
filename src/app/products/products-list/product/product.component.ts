import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
  productDetails:string;
  
  constructor(private router:Router,public auth:AuthService,public profile:ProfileService) {}

  showProductDetails(id:number ){
  this.productDetails =  `/products`
  this.router.navigate([this.productDetails,id])

  }


}
