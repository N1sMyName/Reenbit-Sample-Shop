import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  ngOnDestroy() {
    this.unsubscribeAll.next('end');
    this.unsubscribeAll.complete();
  }

  buildForm() {
    this.form = this.formBuilder.group({});
  }
  resetForm() {
    const low = this.priceRange[0];
    const high = this.priceRange[1];
    this.form.reset({
      price: [low, high],
      categoryName: '',
      brands: [],
      ratings: [],
    });
    console.log(this.priceRange);
    console.log(this.form.get('price'));
  }

  onFormChanges() {
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribeAll), debounceTime(300))
      .subscribe(() => {
        this.formFilterEvent.emit(this.form.value);
      });
  }

}
