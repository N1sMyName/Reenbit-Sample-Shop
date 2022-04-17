import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/Services/db/Product.model';
import { PaginationService } from 'src/app/Services/pagination.service';

@Component({
  selector: 'app-products-nav-bot',
  templateUrl: './products-nav-bot.component.html',
  styleUrls: ['./products-nav-bot.component.sass'],
})
export class ProductsNavBotComponent implements OnInit {
  @Input() products: Product[];
  pages: number = this.pag.available;

  constructor(public pag: PaginationService) {}
  
  ngOnInit(): void {
    this.pag.getPage(this.products, 0);
    this.pages = this.pag.available
  }
}
