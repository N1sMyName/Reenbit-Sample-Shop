import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable, first } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { OrderInfo, OrderRecord } from '../Services/db/orderRecord.model';
import { StoreService } from '../Services/store.service';

// interface OrderRecordResolverData {
//   orders:OrderRecord[]

// }

@Injectable({
  providedIn: 'root',
})
export class ShoppingHistoryResolver implements Resolve<OrderRecord[]> {
  constructor(private store: StoreService, private auth: AuthService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<OrderRecord[]> {
    return this.store.getShoppingHistory(this.auth.user).pipe(first())
  }
}
