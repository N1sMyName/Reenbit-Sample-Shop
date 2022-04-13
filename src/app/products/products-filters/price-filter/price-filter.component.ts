import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.sass'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class PriceFilterComponent implements OnInit {
  @ViewChild('slider') slider:ElementRef
  @Input() priceRange: number[] = [];

  public form: FormGroup;
  public options: Options;

  constructor(private parent: FormGroupDirective) {}

  ngOnInit(): void {
    this.options = {
      floor: this.priceRange[0],
      ceil: this.priceRange[1],
      step: 1,
      showSelectionBar:false,
      hidePointerLabels:true,
      hideLimitLabels:true
      
    };
    this.form = this.parent.form;
    this.form.addControl(
      'price',
      new FormControl([ this.priceRange[0],  this.priceRange[1] ])
    );
    
  }

  
}
