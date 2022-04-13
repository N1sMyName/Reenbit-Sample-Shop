import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Services/db/Product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  productDetails:string;
  
  constructor(private router:Router) {}

  showProductDetails(id:number ){
  this.productDetails =  `/products/${id}`
  this.router.navigateByUrl(this.productDetails)
  }

  ngOnInit(): void {
    
  }
}
