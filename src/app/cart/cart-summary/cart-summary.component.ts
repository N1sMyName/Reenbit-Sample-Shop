import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.sass'],
})
export class CartSummaryComponent implements OnInit {
  constructor(private cart: CartService) {}
  @Input() sum: number = 0
  
  ngOnInit(): void {
    
  }
  
}
