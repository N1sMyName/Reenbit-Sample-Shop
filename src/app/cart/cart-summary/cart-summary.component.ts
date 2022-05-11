import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { takeWhile } from 'lodash';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.sass'],
})
export class CartSummaryComponent implements OnInit {
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.calculateSubTotal()
  }
  @Input() sum: number = 0;
  subtotal = 0;
  rate = 0.18
  tax = 0
  calculateSubTotal(){
    if(this.sum && this.sum > 0 ){
      this.tax = Math.floor(this.sum * this.rate)
      console.log(this.tax)
    this.subtotal = this.sum - this.tax
  } else{
     this.subtotal = 0
     this.tax = 0
  }
  }
  ngOnChanges(c: SimpleChange) {
   this.calculateSubTotal()
  }

  
}
