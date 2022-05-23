import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { FilterService } from '../products-filters/filter.service';

@Component({
  selector: 'app-products-nav-top',
  templateUrl: './products-nav-top.component.html',
  styleUrls: ['./products-nav-top.component.sass'],
})
export class ProductsNavTopComponent {
  @Input() products: Product[] = [];
  @Output() sortEvent:EventEmitter<string> = new EventEmitter()

  sortMethod = 'Rating';
  sortList = [ 'Rating', 'Price(asc)', 'Price(desc)'];

  constructor(public f: FilterService) {}

  setCurrentSortMethod(s: string) {
    this.sortMethod = s;
    this.sortEvent.emit(s)
  
  }
  
}
