import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class BrandFilterComponent implements OnInit {
  @Input() brands: string[];

  constructor(private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.parent.form.addControl(
      'brands',
      new FormGroup(
        this.brands.reduce(
          (group: { [key: string]: AbstractControl }, brand: string) => {
            group[brand] = new FormControl(false);
            return group;
          },
          {}
        )
      )
    );
  }
  get gBrands() {
    return this.parent.form.get('brands')?.value;
  }
}
