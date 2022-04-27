import { Component,  OnInit } from '@angular/core';
import { Product } from '../Services/db/Product.model';
import { FilterService } from './products-filters/filter.service';
import { cloneDeep } from 'lodash';
import { Form } from './form.model';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { LoadingService } from '../Services/loading.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  // generic variables

  // products instances
  public filteredProducts: Product[];
  public originalProducts: Product[];
  // filters stack
  public filters: Form;

  // pagination
  lastPagData: { page: number; stack: number } = { page: 1, stack: 5 };
  paginationData: { page: number; stack: number } = { page: 1, stack: 5 };

  // sort method instance
  sortBy: string = '';
  
  constructor(
    private f: FilterService,
    private aRoute: ActivatedRoute,
    public loading:LoadingService
  ) {
    
  }
  // METHODS
  // lifecycle
  ngOnInit(): void {

    this.aRoute.snapshot.data['products'];
    this.getProducts();
  }

  // generic

  // pagination
  receivePaginationData(event: { page: number; stack: number }) {
    this.paginationData = event;
    this.lastPagData = event;
  }

  getProducts() {
    const data = this.aRoute.snapshot.data['products'];
    this.originalProducts = data;
    this.filteredProducts = data;
  }

  // filter
  setFilters(event: Form) {
    this.filters = event;
    this.filteredProducts = cloneDeep(this.originalProducts);
    this.filteredProducts = this.filterWrapper(this.filteredProducts);
    this.receivePaginationData({ page: 1, stack: this.lastPagData.stack });
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

  // sort
  setSort(c: string) {
    this.sortBy = c;
    this.filteredProducts = this.f.sortBy(this.sortBy, this.filteredProducts);
  }
}
