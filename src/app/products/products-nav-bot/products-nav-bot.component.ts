import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/Services/db/Product.model';

@Component({
  selector: 'app-products-nav-bot',
  templateUrl: './products-nav-bot.component.html',
  styleUrls: ['./products-nav-bot.component.sass'],
})
export class ProductsNavBotComponent implements OnInit {
  @Input() products: Product[];
  @Output() paginationEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
}
