import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartItem } from '../cart/cart-item.model';
import { CartService } from '../cart/cart.service';
import { Product } from '../Services/db/Product.model';
import { LoadingService } from '../Services/loading.service';

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
    public loading: LoadingService
  ) {
    this.router.events.subscribe((e) => {
      this.loading.checkLoadingState(e);
      this.product = this.aRoute.snapshot.data['product']
      if(e instanceof NavigationEnd) {
        this.calculateSubTotal()
      }
    });
  }
  style={'modal':false,'hidden':true}
  stylePresent ={'present':true,'hiddenP':true}
  relevantProducts: Product[];
  form: FormControl;
  product: Product;
  id: number;
  noTaxPrice = 0;
  rate = 0.18;
  tax = 0;
  currentAmount: string;
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
    console.log(this.product.category);
    this.relevantProducts = data
      .filter((e: Product) => e.category === this.product.category)
      .slice(0, 4);
  }

  ngOnInit(): void {
    this.product = this.aRoute.snapshot.data['product'];
    this.currentAmount = this.product.buyBy[0];
    this.form = new FormControl(1, [Validators.required]);
    this.isValid();
    this.calculateSubTotal();
    this.getRelevantProducts();
  }
  addItemToCart(product:Product){
    const local =  JSON.parse(<string>localStorage.getItem('products'))
    const sameProduct =  local?.find((e:CartItem) => e.product.id === product.id)
    if(sameProduct){
      this.stylePresent.hiddenP = !this.stylePresent.hiddenP
      setTimeout(()=>this.stylePresent.hiddenP = !this.stylePresent.hiddenP,3000)
      return
    }
    this.style.modal = !this.style.modal
    this.style.hidden = !this.style.hidden
    this.cart.populateCartStore(product)
  }


  isValid() {
    this.form.valueChanges.subscribe((v) => {
      this.cart.setCounter(v);
    });
  }
  setCurrentBuyBy(item: string) {
    this.currentAmount = item;
  }
}
