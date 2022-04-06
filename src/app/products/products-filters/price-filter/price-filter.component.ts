import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.sass'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {provide: ControlContainer, useExisting: FormGroupDirective}
  ]
})
export class PriceFilterComponent implements OnInit {
  public form: FormGroup;
  public options: Options = {
    floor: 0,
    ceil: 100,
    step: 1
  }

  constructor(private parent: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.form = this.parent.form;
    this.form.addControl('price', new FormControl([15, 53]));
  }

  resetForm(): void {
    this.form.reset({sliderControl: [20, 80]});
  }

}
