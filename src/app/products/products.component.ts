import { Component, OnInit } from '@angular/core';
import { MimicrestService } from '../Services/mimicrest.service';
import { Product } from '../Services/db/Product.model';
import { FilterService } from './products-filters/filter.service';
import { cloneDeep } from 'lodash';
import { Form } from './form.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  public filteredProducts: Product[];
  public originalProducts: Product[];
  public filters: Form;
  sortBy:string = ''

  constructor(
    private mimicrestService: MimicrestService,
    private f: FilterService
  ) {}

  setFilters(event: Form) {
    this.filters = event;
    this.filteredProducts = cloneDeep(this.originalProducts);
    this.filteredProducts = this.filterWrapper(this.filteredProducts);
  }

  setSort(c:string){
    this.sortBy = c
    this.filteredProducts = this.f.sortBy(this.sortBy,this.filteredProducts)
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.mimicrestService.getProducts().subscribe((res) => {
      this.filteredProducts = res;
      this.originalProducts = res;
    });
  }
  filterWrapper(p: Product[]) {
    return this.f.rootFilter(
      p,
      this.filters.categoryName,
      this.filters.price,
      this.filters.brands,
      this.filters.ratings
    );
  }
}
