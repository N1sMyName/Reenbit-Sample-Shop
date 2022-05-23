import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { cloneDeep, debounce, defer, throttle } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { CartValidationService } from '../cart-validation.service';
import { CartService } from '../cart.service';
import { countryList } from '../../Services/db/countries.model';
import {
  countryValidator,
  minLengthPattern,
  stringValidator,
} from './validators.directive';

@Component({
  selector: 'app-cart-billing',
  templateUrl: './cart-billing.component.html',
  styleUrls: ['./cart-billing.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CartBillingComponent implements OnInit {
  constructor(
    public parent: FormGroupDirective,
    private cartValidation: CartValidationService,
    private router: Router,
    public cart: CartService
  ) {}
  public styles = {
    countryVisible: false,
  };
  public countryListOriginal = countryList;
  public countryListFiltered = countryList;
  public form: FormGroup;
  public childForm: FormGroup;
  public unsubscribeAll = new Subject();
  orderIsFinished = false;
  timeout = setTimeout(() => {}, 0);

  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.form = this.parent.form;
    this.form.addControl(
      'billing',
      new FormGroup({
        'first-name': new FormControl(''),
        'last-name': new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl(''),
        city: new FormControl(''),
        country: new FormControl(''),
        zip: new FormControl(''),
      })
    );
    this.childForm = <FormGroup>this.form.get('billing');
    this.localValueChanges();
    this.localStateChanges();
    this.cartValidation.formObs
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => this.isValidBilling());
    // this.childForm.valueChanges.subscribe((v) => console.log(v.zip));
  }
  localValueChanges() {
    const controls = this.childForm.controls;
    for (let c in controls) {
      this.childForm
        .get(c)!
        .valueChanges.pipe(takeUntil(this.unsubscribeAll))
        .subscribe((v) => console.log(this.childForm.controls[c]));
    }
  }
  localStateChanges() {
    const controls = this.childForm.controls;
    for (let c in controls) {
      this.childForm
        .get(c)!
        .statusChanges.pipe(takeUntil(this.unsubscribeAll))
        .subscribe((v) => {
          console.log(v);
        });
    }
  }
  bounce() {
    setTimeout(() => {
      let counter = 0;
      console.log(`run ${counter}`);
      counter++;
    }, 1000);
  }
  test() {
    const d = defer(this.bounce, 1000);
  }

  filterCountries() {
    this.countryListFiltered = cloneDeep(this.countryListOriginal);
    let formValue = this.childForm.get('country')?.value;
    let res = this.countryListFiltered.filter((e) =>
      e.toLowerCase().includes(formValue)
    );
    this.sortCountries(res);
    this.setCountryListVisible();
  }
  sortCountries(list: string[]) {
    let res = list.sort((a: string, b: string) => {
      return +a - +b;
    });
    if (res && res.length) {
      this.countryListFiltered = res;
    } else {
      this.countryListFiltered = ['no such country!!!'];
    }
  }
  // isValid(fcn:string){
  //   this.childForm.get(fcn)?.updateValueAndValidity()
  // }
  setCountryListVisible() {
    console.log(`runs`)
    this.styles.countryVisible = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.styles.countryVisible = false;
      }, 3000);
      return;
    }
    this.timeout = setTimeout(() => {
      this.styles.countryVisible = false;
    }, 3000);

    // if(this.timeout){
    //   clearTimeout(t)
    //   t = setTimeout(() => (this.styles.countryVisible = false), 3000);
    //   return
    // }
    // t = setTimeout(() => (this.styles.countryVisible = false), 3000);
  }
  setCountry(c: string, ref: HTMLInputElement) {
    this.childForm.get('country')?.setValue(c);
    ref.value = c;
  }

  preventInputWrongValue(ref: HTMLInputElement, l: number, min?: number) {
    if (ref.value.length > l) {
      ref.value = ref.value.slice(0, l);
    }
  }
  isValidBilling() {
    this.firstName?.addValidators([
      Validators.required,
      stringValidator(),
      Validators.minLength(3),
    ]);
    this.firstName?.updateValueAndValidity();

    this.lastName?.addValidators([
      Validators.required,
      stringValidator(),
      Validators.minLength(3),
    ]);
    this.lastName?.updateValueAndValidity();

    this.email?.addValidators([
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.minLength(10),
    ]);
    this.email?.updateValueAndValidity();

    this.address?.addValidators([
      Validators.required,
      Validators.minLength(10),
    ]);
    this.address?.updateValueAndValidity();

    this.country?.addValidators([
      Validators.required,
      countryValidator(this.countryListOriginal),
    ]);
    this.country?.updateValueAndValidity();

    this.phone?.addValidators([Validators.required, minLengthPattern(9)]);
    this.phone?.updateValueAndValidity();

    this.city?.addValidators([
      Validators.required,
      Validators.minLength(3),
      stringValidator(),
    ]);
    this.city?.updateValueAndValidity();

    this.zip?.addValidators([Validators.required, minLengthPattern(5)]);
    this.zip?.updateValueAndValidity();
  }

  // GETTERS
  // firstName
  get firstName() {
    return this.childForm.get('first-name');
  }
  get firstNameErrors() {
    if (this.firstName?.errors) {
      return this.firstName.errors;
    }
  }
  // email
  get email() {
    return this.childForm.get('email');
  }
  get emailErrors() {
    return this.email?.errors;
  }
  // address
  get address() {
    return this.childForm.get('address');
  }
  get addressErrors() {
    return this.address?.errors;
  }
  // country
  get country() {
    return this.childForm.get('country');
  }
  get countryErrors() {
    return this.country?.errors;
  }
  // lastName
  get lastName() {
    return this.childForm.get('last-name');
  }
  get lastNameErrors() {
    if (this.lastName?.errors) {
      return this.lastName.errors;
    }
  }
  // phone
  get phone() {
    return this.childForm.get('phone');
  }
  get phoneErrors() {
    return this.phone?.errors;
  }
  // city
  get city() {
    return this.childForm.get('city');
  }
  get cityErrors() {
    return this.city?.errors;
  }
  // zip
  get zip() {
    return this.childForm.get('zip');
  }
  get zipErrors() {
    return this.zip?.errors;
  }
}
