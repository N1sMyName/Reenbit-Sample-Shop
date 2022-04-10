import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from './filter.service';
import { Product } from '../../Services/db/Product.model';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Form } from '../form.model';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.sass'],
})
export class ProductsFiltersComponent {
  @Input() products: Product[] = [];
  @Output() formFilterEvent: EventEmitter<Form> = new EventEmitter();

  public form: FormGroup;

  formattedMessage: string;
  unsubscribeAll = new Subject();
  priceRange: number[];
  brands: string[];
  categories: { name: string; count: number }[];

  constructor(private formBuilder: FormBuilder, private f: FilterService) {}

  ngOnInit(): void {
    this.buildForm();
    this.onFormChanges();

    this.priceRange = this.f.countPriceRange(this.products);
    this.brands = this.f.countBrands(this.products);
    this.categories = this.f.countCategories(this.products);
  }

  buildForm() {
    this.form = this.formBuilder.group({});
  }
  resetForm() {
    this.form.get('price')?.reset([this.priceRange[0],this.priceRange[1]])
    this.form.get('categoryName')?.reset('')
    this.form.get('brands')?.reset([])
    this.form.get('ratings')?.reset({})
    console.log(this.form.value)
  }

  onFormChanges() {
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribeAll), debounceTime(300))
      .subscribe(() => {
        this.formFilterEvent.emit(this.form.value);
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next('end');
    this.unsubscribeAll.complete();
  }
}
