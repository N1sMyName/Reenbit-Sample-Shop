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
  
  constructor() {}

  showDetails(id:number ){
    return `/products/${id}`
  }

  ngOnInit(): void {
  
  }
}
