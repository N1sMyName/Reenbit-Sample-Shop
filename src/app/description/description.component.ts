import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../Services/db/Product.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass'],
})
export class DescriptionComponent implements OnInit {

  constructor(private aRoute: ActivatedRoute, public cart: CartService) {}

  form: FormControl;
  product: Product;
  id:number

  ngOnInit(): void {
    this.product =  this.aRoute.snapshot.data['product'];


    this.form = new FormControl(1, [Validators.required, Validators.min(1)]);
    this.isValid();
  }
  isValid() {
    this.form.valueChanges.subscribe((v) => {
      this.cart.setCounter(v);

    });
  }
}
