import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  ResolveEnd,
  Router,
} from '@angular/router';
import { debounce, transform } from 'lodash';
import { GALLERY_CONFIG } from 'ng-gallery';
import { Subject, takeUntil } from 'rxjs';
import { CartItem } from '../cart/cart-item.model';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../Services/auth.service';
import { Product } from '../Services/db/Product.model';
import { LoadingService } from '../Services/loading.service';
import { StoreService } from '../Services/store.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass'],
})
export class DescriptionComponent implements OnInit {
  constructor(
    private aRoute: ActivatedRoute,
    public cart: CartService,
    public router: Router,
    public loading: LoadingService,
    public store: StoreService,
    public auth: AuthService
  ) {
    this.router.events.pipe(takeUntil(this.unsubscribeAll)).subscribe((e) => {
      this.loading.checkLoadingState(e);
      // if(e instanceof ResolveEnd)

      if (e instanceof NavigationEnd) {
        this.product = this.aRoute.snapshot.data['product'][0];

        this.calculateSubTotal();
        this.getRelevantProducts();
      }
    });
  }
  amountError = false;
  style = { modal: false, hidden: true };
  stylePresent = { present: true, hiddenP: true };
  relevantProducts: Product[];
  form: FormControl;
  product: Product;
  id: number;
  noTaxPrice = 0;
  rate = 0.18;
  tax = 0;
  currentAmount: string;
  unsubscribeAll = new Subject();
  calculateSubTotal() {
    if (this.price && this.price > 0) {
      this.tax = Math.floor(this.price * this.rate);
      this.noTaxPrice = this.price - this.tax;
    }
  }
  get price() {
    return this.product.price;
  }
  getRelevantProducts() {
    const data = this.aRoute.snapshot.data['relevant'];

    this.relevantProducts = data
      .filter((e: Product) => e.category === this.product.category)
      .slice(0, 4);
  }

  ngOnInit(): void {
    this.store
      .getHistory(this.auth.user)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((h) => {
        const res = transform(
          h,
          (res: CartItem[], v) => {
            res.push(v);
          },
          []
        );
        this.cart.cartProducts = res;
      });
    this.product = this.aRoute.snapshot.data['product'][0];
    this.currentAmount = this.product.buyBy[0];
    this.form = new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(99),
    ]);
    this.isValid();
    this.calculateSubTotal();
    this.getRelevantProducts();
  }
  addItemToCart(product: Product) {
    if (this.form.invalid) {
      this.amountError = !this.amountError;
      setTimeout(() => (this.amountError = !this.amountError), 2000);
      return;
    }
    if (this.auth.user) {
      this.cart.addRemote(product);
      this.style.modal = !this.style.modal;
      this.style.hidden = !this.style.hidden;
    } else {
      this.cart.addLocal(product);
      this.style.modal = !this.style.modal;
      this.style.hidden = !this.style.hidden;
    }
  }

  isValid() {
    this.form.valueChanges.subscribe((v) => {
      this.cart.setCounter(v);
    });
  }
  setCurrentBuyBy(item: string) {
    this.currentAmount = item;
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
}
