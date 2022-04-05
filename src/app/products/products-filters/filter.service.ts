import { Injectable } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public price: number;
  public category: string = 'All Products';
  public rating: number;
  public brand: string;

  constructor() {}

  rootFilter(
    products:Product[],
    category: string ,
    price: number,
    brand:  string[],
    rating:  number[]
  ) {
    let res = products
    // 
    if(category !== 'All Products') {
    res = products.filter(p => p.category === category)
    }
    if(price) {
      res = products.filter(p => p.price <= price)
    }
    if(brand.length){
     res = brand.flatMap(b => products.filter(p => p.brand === b)) 
    }
    if(rating.length) {
      res = rating.flatMap(b => products.filter(p => p.rating === b)) 
    }
  }
}
