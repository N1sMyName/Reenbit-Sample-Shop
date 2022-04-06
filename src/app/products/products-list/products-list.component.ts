import { Component, OnInit, Input } from '@angular/core';
import { MimicrestService } from '../../Services/mimicrest.service';
import { Product } from '../../Services/db/Product.model';
import { FilterService } from '../products-filters/filter.service';
import { ProductsService } from '../../Services/products.service';
import { LogerService } from 'src/app/Services/loger.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass'],
  providers:[ProductsService]
})
export class ProductsListComponent  {
data:Product[]
  constructor(private api: MimicrestService,
     private filterS: FilterService,
     private productS:ProductsService,
     public loger:LogerService
     ) {}
  fetchProducts() {
    // this.api.getProducts().subscribe((res) => {
    // this.productS.productsList = res
    // this.data = res
    //   this.productS.productsList = this.filterS.rootFilter(
    //     res,
    //     this.filterS.category,
    //     this.filterS.price,
    //     this.filterS.brand,
    //     this.filterS.rating
    //   );
    // });
  }
  
  
  ngOnInit(): void {
    this.fetchProducts();
   
    
  
    
  }

}
