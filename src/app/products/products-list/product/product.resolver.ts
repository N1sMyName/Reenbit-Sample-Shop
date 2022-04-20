import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product> {
  constructor(private memApi: MimicrestService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    
    const id = route.paramMap.get('id')
    console.log(id)
    return this.memApi.getProduct(Number(id));
  }
}
