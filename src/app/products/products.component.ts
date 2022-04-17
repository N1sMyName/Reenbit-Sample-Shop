import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MimicrestService } from '../Services/mimicrest.service';
import { Product } from '../Services/db/Product.model';
import { FilterService } from './products-filters/filter.service';
import { cloneDeep } from 'lodash';
import { Form } from './form.model';
import { skip, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  public filteredProducts: Product[];
  public originalProducts: Product[];
  public filters: Form;
  lastPagData: { page: number; stack: number } = { page: 1, stack: 5 };
  paginationData: { page: number; stack: number } = { page: 1, stack: 5 };
  receivePaginationData(event: { page: number; stack: number }) {
    this.paginationData = event;
    this.lastPagData = event;
  }
  sortBy: string = '';
  unsubscribeAll = new Subject();
  constructor(
    private mimicrestService: MimicrestService,
    private f: FilterService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
  getProducts() {
    this.mimicrestService
      .getProducts()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res) => {
        this.filteredProducts = res;
        this.originalProducts = res;
      });
  }
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

  setSort(c: string) {
    this.sortBy = c;
    this.filteredProducts = this.f.sortBy(this.sortBy, this.filteredProducts);
  }
}
