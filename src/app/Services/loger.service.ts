import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../products/products-list/product/product.component';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class LogerService {

  constructor(private prod:ProductsService) {}
}
