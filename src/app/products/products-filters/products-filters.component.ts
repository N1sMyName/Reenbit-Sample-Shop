import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilterService} from './filter.service';
import {Product} from "../../Services/db/Product.model";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.sass']
})
export class ProductsFiltersComponent {
  @Input() products: Product[] = []
  public form: FormGroup;

  formattedMessage: string;

  constructor(private formBuilder: FormBuilder,
              private rootFilter: FilterService, private fb: FormBuilder,) {
  }


  ngOnInit(): void {
    this.buildForm()
    this.onFormChanges()

  }

  buildForm() {
    this.form = this.formBuilder.group({});
  }

  onFormChanges() {
    // takeUntil(this.unsubscribeAll)
    this.form.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(() => {
      console.log(this.form.value)
    });
  }
}
