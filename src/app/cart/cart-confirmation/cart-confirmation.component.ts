import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import {  Router } from '@angular/router';
import {  toArray } from 'lodash';
import { AuthService } from 'src/app/Services/auth.service';
import {
  OrderInfo,
  OrderRecord,
} from 'src/app/Services/db/orderRecord.model';
import { StoreService } from 'src/app/Services/store.service';
import { CartItem } from '../cart-item.model';
import { CartValidationService } from '../cart-validation.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-confirmation',
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CartConfirmationComponent implements OnInit {
  constructor(
    public parent: FormGroupDirective,
    private fb: FormBuilder,
    private cartValidator: CartValidationService,
    private router: Router,
    public store: StoreService,
    public auth: AuthService,
    private cart:CartService
  ) {}
  
 
  form: FormGroup;
  isReady = false;
  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.form = this.parent.form;
    this.buildForm();
    this.getOldHistory();
    this.assembleOrderProducts();
    
  }

  getOldHistory() {
    this.store
      .getShoppingHistory(this.auth.user)
      .pipe()
      .subscribe((r) => {
        this.store.userShoppingHistory = toArray(r);
      });
  }
  buildForm() {
    this.form.addControl(
      'conditionTerms',
      this.fb.group({
        condition1: new FormControl(false),
        condition2: new FormControl(false),
      })
    );
  }

  addValidators() {
    this.cartValidator.formSub.next('');

    const child = this.form.get('conditionTerms') as FormGroup;
    for (let i in child.controls) {
      child.controls[i].addValidators(Validators.requiredTrue);
      child.controls[i].updateValueAndValidity();
    }
    this.parent.form.updateValueAndValidity();
    this.checkValidity;
  }
  checkValidity() {
    this.assembleOrderProducts();
    if (this.parent.form.valid && this.parent.form.dirty) {
      this.isReady = true;
      this.store.updateHistory(this.auth.user, []);
      this.store.updateShoppingHistory(
        this.auth.user,
        this.assembleOrderRecord()
      );
    }
  }
  // fetch data from 
  assembleOrderRecord() {
    const addInfo = this.parent.form.get('addInfo');
    const billing = this.parent.form.get('billing')?.value;
    const info: OrderInfo = {
      firstName: billing['first-name'],
      lastName: billing['last-name'],
      email: billing.email,
      phoneNumber: billing.phone,
      address: billing.address,
      city: billing.city,
      country: billing.country,
      zip: billing.zip,
      addInfo: addInfo?.value || 'empty',
    };
    const products = this.assembleOrderProducts();
    const res: OrderRecord = {
      orderDate: new Date().getTime(),
      orderProducts: products,
      orderInfo: info,
    };
    
    if (this.store.userShoppingHistory) {
      return [...this.store.userShoppingHistory, res];
    } else {
      return [res];
    }
  }
  // take chosen products from cart
  assembleOrderProducts() {
    this.cartItems = this.cart.cartProducts
    const boughtProducts: CartItem[] = [];

    this.cartItems.forEach(item => boughtProducts.push(item))
    return boughtProducts;
  }


  get child() {
    return this.form.get('conditionTerms');
  }
  backHome() {
    localStorage.clear();
    this.router.navigate(['/products']);
    setTimeout(() => {
      this.isReady = false;
    }, 1000);
  }
}
