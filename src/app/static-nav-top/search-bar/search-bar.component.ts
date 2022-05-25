import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart/cart.service';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import firebase from 'firebase/compat/app';
import { ProfileService } from 'src/app/Services/profile.service';
import { StoreService } from 'src/app/Services/store.service';
import { transform } from 'lodash';
import { CartItem } from 'src/app/cart/cart-item.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  constructor(
    private api: MimicrestService,
    private router: Router,
    private fb: FormBuilder,
    public cart: CartService,
    public auth: AuthService,
    public profile: ProfileService,
    public store: StoreService
  ) {}
  // public user: firebase.User | null
  public unsubscribeAll = new Subject();
  public data: Product[] = [];
  public list: Product[] = [];

  productsInCart: number = 0;

  public searchQuery = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  public errorMsg = '';

  public dropDownResult = {
    hidden: true,
    'search-result': true,
  };
  public errorStyles = {
    'error-container': true,
    isError: false,
  };

  ngOnInit(): void {
    this.api
      .products()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res) => {
        this.data = res;
      });

    this.cart.notifyObs.pipe(takeUntil(this.unsubscribeAll)).subscribe(() => {
      this.cart.cartProducts?.length
        ? (this.productsInCart = this.cart.cartProducts.length)
        : (this.productsInCart = 0);
    });

    document.addEventListener('keydown', this.handleCloseByEsc.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleCloseByEsc);
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }
  handleCloseByEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.dropDownResult.hidden = true;
      this.errorStyles.isError = false;
    }
  }
  handleSearchByEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  // alphabet sort
  sortFunction(data: Product[], param: keyof Product) {
    // compare function
    function compare(a: Product, b: Product) {
      if (a[param] < b[param]) return -1;
      if (a[param] > b[param]) return 1;
      return 0;
    }
    // setting sorted data
    this.list = data.sort(compare);
  }
  checkValidity() {
    if (!this.searchQuery.errors) {
      this.errorStyles['isError'] = false;
    }
  }

  search() {
    if (this.searchQuery.errors) {
      this.errorStyles['isError'] = true;
      this.errorMsg = 'Required min-length 3';
      this.dropDownResult.hidden = true;
      return;
    }
    // make copy of data
    this.list = [...JSON.parse(JSON.stringify(this.data))];

    if (this.list) {
      this.list = this.list.filter((e) =>
        e.title.toLowerCase().includes(this.searchQuery.value)
      );
      this.sortFunction(this.list, 'title');
      this.dropDownResult.hidden = false;
    }

    if (!this.list.length) {
      this.dropDownResult.hidden = true;
      this.errorStyles.isError = true;
      this.errorMsg = 'Product not found';
    }
  }

  closeResultWindow() {
    this.dropDownResult.hidden = true;
  }
  moveToProduct(id: number) {
    const link = `/products/${id}`;
    console.log(link);
    this.router.navigateByUrl(link);
    this.closeResultWindow();
  }
  moveToCart() {
    this.router.navigateByUrl('/cart');
  }
  toProducts() {
    this.router.navigate(['/products']);
  }
  clearCartHistory() {
    this.cart.cartProducts =
      JSON.parse(<string>localStorage.getItem('products')) || [];
    this.cart.notifySub.next(false);
  }
  toAdminPanel() {
    this.router.navigate(['/admin']);
  }
  toShoppingHistoryPanel(){
    this.router.navigate(['/shoppingHistory']);

  }
}
