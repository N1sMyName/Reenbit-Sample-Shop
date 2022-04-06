import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.sass']
})
export class ProductsFiltersComponent  {

  formattedMessage:string;
  rootForm:FormGroup;

  constructor(private rootFilter:FilterService, private fb:FormBuilder) { }
  


  ngOnInit(): void {
      
  }

 
}