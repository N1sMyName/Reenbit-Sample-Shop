import { Component, OnInit, Input } from '@angular/core';
import { MimicrestService } from '../../Services/mimicrest.service';
import { Product } from '../../Services/db/Product.model';
import { FilterService } from '../products-filters/filter.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent  {
data:Product[]
  constructor(private api: MimicrestService,
     private filterS: FilterService,
     ) {}
  fetchProducts() {
    this.api.getProducts().subscribe((res) => {
      this.data = this.filterS.rootFilter(
        res,
        this.filterS.category,
        this.filterS.price,
        this.filterS.brand,
        this.filterS.rating
      );
    });
  }
  
  ngOnInit(): void {
    this.fetchProducts();
  }
}
