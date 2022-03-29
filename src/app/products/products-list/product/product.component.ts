import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  productDetails:string;
  
  constructor() {}

  composeDetailsUrl(id:number ){
  this.productDetails =  `/products/${id}`
  }

  ngOnInit(): void {
    this.composeDetailsUrl(this.product.id)
  }
}
