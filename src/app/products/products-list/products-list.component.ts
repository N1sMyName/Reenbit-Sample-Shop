import { Component, OnInit, Input } from '@angular/core';
import { MimicrestService } from '../../Services/mimicrest.service';
import { Product } from '../../Services/Product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
})
export class ProductsListComponent implements OnInit {
  data: Product[];

  constructor(private api: MimicrestService) {}
  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.data = res;
    });
  }
}
