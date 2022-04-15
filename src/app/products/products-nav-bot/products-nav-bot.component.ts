import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';

@Component({
  selector: 'app-products-nav-bot',
  templateUrl: './products-nav-bot.component.html',
  styleUrls: ['./products-nav-bot.component.sass']
})
export class ProductsNavBotComponent implements OnInit {
  @Input() products:Product[]
  constructor() { }

  ngOnInit(): void {
  }

}
