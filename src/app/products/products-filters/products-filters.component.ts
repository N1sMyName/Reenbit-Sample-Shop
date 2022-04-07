import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from './filter.service';
import { Product } from '../../Services/db/Product.model';
import { debounceTime, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.sass'],
})
export class ProductsFiltersComponent {
  @Input() products: Product[] = [];
  // @Output()
  public form: FormGroup;
  formattedMessage: string;
  unsubscribeAll = new Subject();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.onFormChanges();
  }

  buildForm() {
    this.form = this.formBuilder.group({});
  }
 

  onFormChanges() {
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribeAll), debounceTime(300))
      .subscribe(() => {
        console.log(this.form.value);
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next('end');
    this.unsubscribeAll.complete();
  }
}
