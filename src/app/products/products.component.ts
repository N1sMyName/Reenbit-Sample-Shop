import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MimicrestService } from '../Services/mimicrest.service';
import { Product } from '../Services/db/Product.model';
import { FilterService } from './products-filters/filter.service';
import { cloneDeep } from 'lodash';
import { Form } from './form.model';
import { PaginationService } from '../Services/pagination.service';
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

  sortBy: string = '';

  unsubscribeAll = new Subject();
  constructor(
    private mimicrestService: MimicrestService,
    private f: FilterService,
    private pag: PaginationService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    console.log(`init`)
    this.getProducts();
    this.setPagination(); 
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
  getProducts() {
    console.log(`prodcuts`)
    this.mimicrestService
      .getProducts()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res) => {
        this.filteredProducts = res;
        this.originalProducts = res;
        
      });
  }
  setFilters(event: Form) {
    console.log(`filters`)
    this.filters = event;
    this.filteredProducts = cloneDeep(this.originalProducts);
    this.filteredProducts = this.filterWrapper(this.filteredProducts);
    console.log(this.filteredProducts)
    console.log(this.pag.step)
    this.filteredProducts = this.pag.initialPage(this.filteredProducts,0)
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
  setPagination() {
    console.log(`pagination`)
    this.pag.products.pipe(skip(2)).subscribe({
      next: (val) => {this.filteredProducts = val},
      error: (err) => {
        console.log(err);
      },
    });
  }

  setSort(c: string) {
    this.sortBy = c;
    this.filteredProducts = this.f.sortBy(this.sortBy, this.filteredProducts);
  }
}
