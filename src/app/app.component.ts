import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transform } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { CartItem } from './cart/cart-item.model';
import { CartService } from './cart/cart.service';
import { AuthService } from './Services/auth.service';

import { LoadingService } from './Services/loading.service';
import { StoreService } from './Services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public loading: LoadingService,
    public auth: AuthService,
    public store: StoreService,
    public cart: CartService
  ) {
    this.router.events.subscribe((e) => {
      this.loading.checkLoadingState(e);
    });
  }
  data: any;
  isLoading: boolean;
  unsubscribeAll = new Subject();

  ngOnInit() {
    this.auth
      .loginStateObs()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((r) => {
        this.auth.user = r;
        
        if (this.auth.user) {
          this.store
            .getHistory(this.auth.user)
            .pipe(takeUntil(this.unsubscribeAll))
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
              }
            });
        } else {
          // 1
          this.cart.cartProducts =
            JSON.parse(<string>localStorage.getItem('products')) || [];
        }
      });
    this.loading.loadingObs.subscribe((res) => (this.loading.isLoading = res));
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
  // this.store.setUser(r)
}
