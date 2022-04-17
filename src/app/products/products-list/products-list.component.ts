import { Component, Input } from '@angular/core';
import { Product } from '../../Services/db/Product.model';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
  providers: [ProductsService],
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  @Input() paginationData: { page: number; stack: number } = {page:1,stack:5}

  constructor() {}

  ngOnInit(): void {
  }
}
