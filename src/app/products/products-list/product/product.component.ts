import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/Services/Product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input() products:Product[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
