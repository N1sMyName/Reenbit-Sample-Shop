import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { first, Observable } from 'rxjs';
import { Product } from '../Services/db/Product.model';
import { MimicrestService } from '../Services/mimicrest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private api:MimicrestService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.api.products().pipe(first()) as Observable<Product[]>
  }
}
