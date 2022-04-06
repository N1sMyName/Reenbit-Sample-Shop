import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/Services/db/categories.model';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';

import { FilterService } from '../filter.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.sass'],
})
export class CategoriesFilterComponent implements OnInit {
  @ViewChild('categoryRef') categoryRef: ElementRef;

  public categories: Category[];
  public products: Product[];

  constructor(
    
    public api: MimicrestService,
    public filterS: FilterService
  ) {}

  fetchCategories() {
    this.api.getCategories().subscribe((res) => (this.categories = res));
  }
  
  setCategoryToFilter(name: string) {
    this.filterS.category = name;
  }

  ngOnInit(): void {
    this.fetchCategories();
    
    
  }
}


