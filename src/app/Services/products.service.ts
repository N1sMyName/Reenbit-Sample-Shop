import { Injectable } from '@angular/core';
import { Product } from './db/Product.model';
import { MimicrestService } from './mimicrest.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: BehaviorSubject<Product[]>
  sharedProducts:Observable<Product[]>
  constructor(private api: MimicrestService) {
    
    this.api
      .getProducts()
      .subscribe(
        (res) => {
          this.productsList = new BehaviorSubject(res)
          this.sharedProducts = this.productsList.asObservable()
        }
      );
  }

  
  
  get gSharedProduct(){
    return this.sharedProducts
  }

  


  
}
