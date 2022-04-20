import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Services/db/Product.model';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // LOCAL STORAGE
  // products - products that is in the cart
  // productsCount - products length to display at products page

  constructor(private router: Router) {}
  // events
  notifySub = new BehaviorSubject<boolean>(false);
  notifyObs = this.notifySub.asObservable();
  // products
  private cartProducts: CartItem[] =
    JSON.parse(<string>localStorage.getItem('products')) || [];
  // product counter
  private productCounter: number = 1;

  get cartStore() {
    return this.cartProducts;
  }
  //
  get descCounter() {
    return this.productCounter;
  }
  setCounter(amount: number): void {
    this.productCounter = amount;
  }

  populateCartStore(product: Product): void {
    const cartItem = { product: product, count: this.descCounter };
    console.log(cartItem);
    // let duplicateDetected = false

    if (this.cartStore) {
      this.cartProducts = [...this.cartProducts, cartItem];

      localStorage.setItem('products', JSON.stringify(this.cartProducts));
      localStorage.setItem(
        'productsCount',
        JSON.stringify(this.cartProducts.length)
      );
      this.notifySub.next(false);
      this.router.navigateByUrl('/cart');
      return;
    }

    this.cartProducts = [cartItem];

    localStorage.setItem('products', JSON.stringify(this.cartProducts));
    localStorage.setItem(
      'productsCount',
      JSON.stringify(this.cartProducts.length)
    );
    this.notifySub.next(false);
    this.router.navigateByUrl('/cart');
  }
  //   checkDuplicates(product:CartItem){
  //     const store = JSON.parse(<string>localStorage.getItem('products'))
  // for(let i of store){
  //   console.log(i)
  // }
  // }
}
