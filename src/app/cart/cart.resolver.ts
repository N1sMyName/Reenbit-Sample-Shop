import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { first, Observable, of } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { StoreService } from '../Services/store.service';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<CartItem[]> {
  constructor(private store:StoreService,private auth:AuthService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CartItem[]> {
    return this.store.getHistory(this.auth.user).pipe(first()) as Observable<CartItem[]>
  }
}
