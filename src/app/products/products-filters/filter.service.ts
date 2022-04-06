import { Injectable } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public price: number;
  public category: string = 'All Products';
  public rating: number[] = [1,2,3,4,5];
  public brand: string[];

  constructor() {}

  rootFilter(
    products:Product[],
    category: string ,
    price: number,
    brand:  string[],
    rating:  number[] 
  ):Product[]  {
    let res = products
    // 
    if(category !== 'All Products') {
    res = products.filter(p => p.category === category)
    console.log(res)
    }
    if(price) {
      res = products.filter(p => p.price <= price)
    }
    
    if(brand){
     res = brand.flatMap(b => products.filter(p => p.brand === b)) 
    }

    if(rating) {
      res = rating.flatMap(r => products.filter(p => p.rating === +r)) 
    }
    return res
  }
}
