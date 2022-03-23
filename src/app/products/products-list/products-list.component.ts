import { Component, OnInit, Input } from '@angular/core';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { Product } from 'src/app/Services/Product.model';
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
