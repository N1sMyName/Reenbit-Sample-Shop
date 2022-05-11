import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { LoadingService } from '../Services/loading.service';
import { StoreService } from '../Services/store.service';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service';
import { transform } from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  constructor(
    public aRoute: ActivatedRoute,
    public cart: CartService,
    private fb: FormBuilder,
    public loader: LoadingService,
    public store: StoreService,
    public auth: AuthService
  ) {}

  public form: FormGroup;
  // public products: CartItem[] = [];
  public sum: number = 0;
  public unsubscribeAll = new Subject();
  // INIT
  ngOnInit() {
    if (this.auth.user) {
      this.store
        .getHistory(this.auth.user)
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((historyRemote) => {
          if (this.auth.user) {
            const res = transform(historyRemote,(res: CartItem[], v) => {
                    res.push(v);
              },[]);
            this.cart.cartProducts = res;
            this.cart.notifySub.next(false);
          }
        });
    } else {
      // 1
      this.cart.cartProducts = JSON.parse(<string>localStorage.getItem('products'));
      this.cart.cartProducts = JSON.parse(
        <string>localStorage.getItem('products')
      );
    }
    this.cart.notifyObs.pipe(takeUntil(this.unsubscribeAll)).subscribe(() => {
      if (!this.auth.user) {
        // 2
        this.cart.cartProducts = JSON.parse(<string>localStorage.getItem('products'));
      }
      this.calculateSummary();
    });

    this.buildForm();
    this.onFormChanges();
  }
  // PRICE
  calculateSummary() {
    // 3
    if (this.cart.cartProducts?.length) {
      let sum: number = 0;
      this.cart.cartProducts
      this.cart.cartProducts.forEach((e) => (sum += e.product.price * e.count));
      this.sum = +sum.toFixed(2);
    } else {
      this.sum = 0;
    }
  }
  // FORM
  buildForm() {
    this.form = this.fb.group({});
  }
  // unsubscribe!!!!
  onFormChanges() {
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((v) => {
        this.calculateSummary();
      });
  }
  // OTHER
  update() {
    // 4
    this.store.updateHistory(this.auth.user, this.cart.cartProducts);
  }
  ngOnDestroy() {
    // 5
    this.store.updateHistory(this.auth.user, this.cart.cartProducts);
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
}
