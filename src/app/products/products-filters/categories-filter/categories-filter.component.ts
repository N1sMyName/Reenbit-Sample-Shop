import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';

import { FilterService } from '../filter.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class CategoriesFilterComponent implements OnInit {
  @Input() categories: { name: string; count: number; }[];

  public products: Product[];
  form: FormGroup;

  constructor(
    public api: MimicrestService,
    public f: FilterService,
    private parent: FormGroupDirective
  ) {}

  setCategoryName(name:string){
    this.form.get('categoryName')?.setValue(name)
  }

  ngOnInit(): void {
    this.form = this.parent.form;
    this.form.addControl('categoryName', new FormControl(''));
  }
}
