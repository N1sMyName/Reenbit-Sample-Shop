import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transform } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { CartItem } from 'src/app/cart/cart-item.model';
import { CartService } from 'src/app/cart/cart.service';
import { AuthService } from 'src/app/Services/auth.service';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-redirect-modal',
  templateUrl: './redirect-modal.component.html',
  styleUrls: ['./redirect-modal.component.sass'],
})
export class RedirectModalComponent  {
  constructor(private router: Router,
    public store:StoreService,
    public auth:AuthService,
    public cart: CartService) {}
  @Input() style: any;
  unsubscribeAll = new Subject()

  // ngOnInit(): void {}
  continue() {
    this.style.modal = !this.style.modal;
    this.style.hidden = !this.style.hidden;
    if (this.auth.user) {
     const takeLatestProductsFromDB = this.store
        .getHistory(this.auth.user)
        .pipe()
        .subscribe((h) => {
          if (this.auth.user) {
            const res = transform(
              h,
              (res: CartItem[], v) => {
                res.push(v);
              },
              []
            );
            this.cart.cartProducts = res;
            // this.products = res;
            

            this.cart.notifySub.next(false);
            takeLatestProductsFromDB.unsubscribe()
          }
        });
    } else {
      // 1
      this.cart.cartProducts = JSON.parse(<string>localStorage.getItem('products'));
      this.cart.cartProducts = JSON.parse(
        <string>localStorage.getItem('products')
      );
    }
  }
  toCart() {
    this.router.navigate(['/cart']);
  }

}
