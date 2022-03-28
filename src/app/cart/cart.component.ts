import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  
  constructor(public route:ActivatedRoute) {}
  ngOnInit(){
    console.log(this.route.snapshot.data['hideFooter'])
  }
}
