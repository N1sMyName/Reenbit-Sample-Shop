import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.sass']
})
export class CartProductComponent implements OnInit {

@Input()product:Product
@Input()count:number
@Input()products:CartItem[]
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    
  }
  removeProduct(id:number){
    console.log(id)
    const res =  this.products.filter(e => e.product.id !== id)
    this.products = res
    const count = +JSON.parse(<string>localStorage.getItem('productsCount')) 
    localStorage.setItem('productsCount',JSON.stringify(count - 1))
    localStorage.setItem('products',JSON.stringify(this.products))
    this.cart.notifySub.next(false) 
  }

}
