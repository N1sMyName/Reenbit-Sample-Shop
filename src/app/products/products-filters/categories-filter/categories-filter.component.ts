import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/Services/db/categories.model';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { FilterService } from '../filter.service';


@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.sass']
})
export class CategoriesFilterComponent implements OnInit {
  public categories:Category[];
  public products:Product[];
  @ViewChild('categoryRef') categoryRef:ElementRef;
  constructor(private api:MimicrestService,public filter:FilterService) { }

  fetchCategories(){
    this.api.getCategories().subscribe(res =>
      this.categories = res
    )
  }
  fetchProducts(){
    this.api.getProducts().subscribe(res => 
      this.products = res)
  }
  setCategotyToFilter(name:string,event:Event){
    this.filter.category = name
    console.log(event.target)
    
  }

  ngOnInit(): void {
    this.fetchCategories()
    this.fetchProducts()
    
    
  }
  

}
