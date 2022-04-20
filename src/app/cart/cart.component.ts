import { Component, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { skip } from 'rxjs';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  
  constructor(public route:ActivatedRoute,private cart:CartService,private fb:FormBuilder) {}
  form:FormGroup;
  products:CartItem[] = JSON.parse(<string>localStorage.getItem('products')) || []
  sum:number = 0

  ngOnInit(){
  this.buildForm()
  this.cart.notifyObs.pipe(skip(1)).subscribe(()=>{
    this.products = JSON.parse(<string>localStorage.getItem('products'))
    this.calculateSummary()
  })
  console.log(this.form)
  this.calculateSummary()
  }
  calculateSummary() {
    let sum: number = 0;
    this.products.forEach((e) => (sum += e.product.price));
    console.log(sum);
    this.sum = sum;
    
  }
  buildForm(){
    this.form = this.fb.group({})
  }
  
}
