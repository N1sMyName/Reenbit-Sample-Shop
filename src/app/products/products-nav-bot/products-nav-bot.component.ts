import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';

@Component({
  selector: 'app-products-nav-bot',
  templateUrl: './products-nav-bot.component.html',
  styleUrls: ['./products-nav-bot.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsNavBotComponent implements OnInit {
  @Input() products: Product[];
  @Output() paginationEvent: EventEmitter<{ page: number; stack: number }> =
    new EventEmitter();
  page: number = 1;
  stack: number = 5;
  constructor() {}

  sendPaginationData() {
    this.paginationEvent.emit({ page: this.page, stack: this.stack });
    console.log(this.page);
  }
  showMore() {
    this.stack = this.stack + 5;
    this.paginationEvent.emit({ page: 1, stack: this.stack });
    console.log(this.page);
  }
  ngOnInit(): void {}
}
