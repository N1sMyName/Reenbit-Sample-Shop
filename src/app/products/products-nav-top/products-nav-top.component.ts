import { Component, OnInit } from '@angular/core';
import { FilterService } from '../products-filters/filter.service';

@Component({
  selector: 'app-products-nav-top',
  templateUrl: './products-nav-top.component.html',
  styleUrls: ['./products-nav-top.component.sass']
})
export class ProductsNavTopComponent  {

  constructor(public filter:FilterService) { }

  ngOnInit(): void {
  }

}
