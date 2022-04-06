import {Component, OnInit} from '@angular/core';
import {MimicrestService} from "../Services/mimicrest.service";
import {Product} from "../Services/db/Product.model";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  public filteredProducts: Product[]
  public originalProducts: Product[]

  constructor(private mimicrestService: MimicrestService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.mimicrestService.getProducts().subscribe(response => {
      this.filteredProducts = response;
      this.originalProducts = response;
    })
  }


}
