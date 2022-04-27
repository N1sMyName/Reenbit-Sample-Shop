import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { LoadingService } from '../Services/loading.service';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class CartComponent {
  constructor(
    public route: ActivatedRoute,
    private cart: CartService,
    private fb: FormBuilder,
    public loader:LoadingService
  ) {}
  public form: FormGroup;
  public products: CartItem[] =
    JSON.parse(<string>localStorage.getItem('products')) || [];
  public sum: number;
  public unsubscribeAll = new Subject()

  ngOnInit() {
    this.buildForm();
    this.cart.notifyObs.pipe().subscribe(() => {
      this.products = JSON.parse(<string>localStorage.getItem('products'));
      this.calculateSummary();
    });
    this.calculateSummary();
    this.onFormChanges();
  }
  ngOnDestroy(){
    this.unsubscribeAll.next('')
    this.unsubscribeAll.complete()
  }
  calculateSummary() {
    if (this.products && this.products.length) {
      let sum: number = 0;
      this.products.forEach((e) => (sum += e.product.price * e.count));
      this.sum = sum;
    } else {
      this.sum = 0;
    }
  }
  buildForm() {
    this.form = this.fb.group({});
    
  }
  // unsubscribe!!!!
  onFormChanges() {
    this.form.valueChanges.subscribe((v) => {
      this.calculateSummary();
    });
  }

 
}
