import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.sass']
})
export class BrandFilterComponent implements OnInit {
  checkBoxForm:FormArray
  constructor(private filterS:FilterService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.checkBoxForm = this.fb.array([])
  }
  onChanges(): void {
    this.checkBoxForm.valueChanges.subscribe(val => console.log(val))
  

  }

}
