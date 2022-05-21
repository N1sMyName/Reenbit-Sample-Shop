import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { Product } from 'src/app/Services/db/Product.model';
import { StoreService } from 'src/app/Services/store.service';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CartProductComponent implements OnInit {
  constructor(
    public cart: CartService,
    private parent: FormGroupDirective,
    public store: StoreService,
    public auth: AuthService
  ) {}

  @Input() product: Product;
  @Input() products: CartItem[];
  public form: FormGroup;
  public unsubscribeAll = new Subject();
  lengthError:string
  measureBy: string;
  styles = {
    measureByVisible: false,
  };

  ngOnInit(): void {
    this.form = this.parent.form;
    this.buildForm();
    this.cart.notifyObs.pipe(takeUntil(this.unsubscribeAll)).subscribe(() => {
      this.buildForm();
    });
    this.subscribeToEachProductChange();
    this.measureBy = this.product.buyBy[0];
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }

  removeProduct(id: number) {
    const res = this.products.filter((e) => e.product.id !== id);
    this.products = res;
    if (this.auth.user) {
      this.store.updateHistory(this.auth.user, res);
    } else {
      const count = +JSON.parse(<string>localStorage.getItem('productsCount'));
      localStorage.setItem('productsCount', JSON.stringify(count - 1));
      localStorage.setItem('products', JSON.stringify(this.products));
      this.cart.cartProducts = res;
    }
    this.form.removeControl(id.toString());
    this.cart.notifySub.next(false);
  }

  buildForm() {
    if (this.products?.length) {
      this.products.forEach((item) => {
        this.form.addControl(
          item.product.id.toString(),
          new FormControl(item.count, [Validators.required, Validators.min(1),Validators.max(99)])
        );
      });
    }
  }
  recalculateCount(id: number, v: number) {
    let item = this.products.find((v) => v.product.id === id);
    if (typeof item === 'object') {
      item.count = v;
    }
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  subscribeToEachProductChange() {
    this.oneProduct.valueChanges
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((v) => {
      this.recalculateCount(this.product.id,v) 
      })

  }

  // getters
  get oneProduct() {
    return this.form.controls[this.product.id];
  }
  get oneProductError(){
    return this.oneProduct.errors
  }

  setMeasureBy(item: string) {
    this.measureBy = item;
  }
}
