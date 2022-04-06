import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class PriceFilterComponent implements OnInit {
 
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([15, 53])
  });
 options:Options = {
   floor:0,
   ceil:100,
   step:1
 }

  constructor(private fb:FormBuilder ) { }
 
  ngOnInit(): void {
    this.sliderForm.controls['sliderControl'].value[0]
    
  }

  resetForm(): void {
    this.sliderForm.reset({sliderControl: [20, 80]});
  }

}
