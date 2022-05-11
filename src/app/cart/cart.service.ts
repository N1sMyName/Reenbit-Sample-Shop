import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { Product } from '../Services/db/Product.model';
import { StoreService } from '../Services/store.service';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // LOCAL STORAGE
  // products - products that is in the cart
  // productsCount - products length to display at products page

  constructor(
    private router: Router,
    private store: StoreService,
    private auth: AuthService
  ) {}
  // events
  notifySub = new BehaviorSubject<boolean>(false);
  notifyObs = this.notifySub.asObservable();
  // products
  public cartProducts: CartItem[] = [];
  // product counter
  private productCounter: number = 1;

  //
  get descCounter() {
    return this.productCounter;
  }
  setCounter(amount: number): void {
    this.productCounter = amount;
  }

  addRemote(product: Product): void {
    console.log(`remote`);

    const cartItem: CartItem = { product: product, count: this.descCounter };
    let same;
    console.log(this.cartProducts);
    if (this.cartProducts.length) {
      same = this.cartProducts?.find(
        (e: CartItem) => e.product.id === product.id
      );
    }
    same
      ? this.store.updateHistory(this.auth.user, this.cartProducts)
      : this.store.updateHistory(this.auth.user, [
          ...this.cartProducts,
          cartItem,
        ]);
    this.notifySub.next(false);
    
  }
  addLocal(product: Product): void {
    console.log(`local`);
    const cartItem: CartItem = { product: product, count: this.descCounter };
    const local = JSON.parse(<string>localStorage.getItem('products')) || []
    
    this.cartProducts = local;
    let sameProduct;
    console.log(`cart products length`);
   
   
    if (this.cartProducts.length) {
      sameProduct = local?.find((e: CartItem) => e.product.id === product.id);
    }
    console.log(`same prod ${sameProduct}`);
    if (sameProduct) {
      console.log(`single local`);
      localStorage.setItem('products', JSON.stringify(this.cartProducts));
      localStorage.setItem(
        'productsCount',
        JSON.stringify(this.cartProducts.length)
      );
      this.notifySub.next(false);
    } else {
      console.log(`multiple local`);
      this.cartProducts = [...this.cartProducts, cartItem];
      localStorage.setItem('products', JSON.stringify(this.cartProducts));
      localStorage.setItem(
        'productsCount',
        JSON.stringify(this.cartProducts.length)
      );
      this.notifySub.next(false);
      return;
    }
  }
  preventInputWrongValue(ref: HTMLInputElement, l: number,flag?:boolean) {
  
    if (ref.value.length > l) {
      ref.value = ref.value.slice(0, l);
    }
  }

}
