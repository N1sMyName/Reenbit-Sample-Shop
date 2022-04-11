import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { FilterService } from '../products-filters/filter.service';

@Component({
  selector: 'app-products-nav-top',
  templateUrl: './products-nav-top.component.html',
  styleUrls: ['./products-nav-top.component.sass'],
})
export class ProductsNavTopComponent {
  @Input() products: Product[] = [];
  constructor(public filter: FilterService) {}

}
