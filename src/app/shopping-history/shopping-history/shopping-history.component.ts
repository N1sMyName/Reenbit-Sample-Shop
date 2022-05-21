import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { toArray } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { OrderRecord } from 'src/app/Services/db/orderRecord.model';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingHistoryComponent implements OnInit {
  constructor(
    private router: Router,
    private aRoute: ActivatedRoute,
    public store: StoreService
  ) {
    this.getOrderHistory();
  }
  public orders: OrderRecord[];
  public unsubscribeAll = new Subject();
  public expansionPanelElementsStyles = {
    date: { orderPreviewDate: true, hidden: false },
  };
  ngOnInit(): void {
    console.log(this.store.userShoppingHistory?.length);
  }
  ngOnDestroy() {
    this.unsubscribeAll.next('');
    this.unsubscribeAll.complete();
  }

  getOrderHistory() {
    this.router.events.pipe(takeUntil(this.unsubscribeAll)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(this.aRoute.snapshot.data)
        let rec: OrderRecord[] = this.aRoute.snapshot.data[0];
        this.orders = toArray(rec);
        console.log(this.orders)
      }
    });
  }
  toProducts(){
    this.router.navigate(['/products'])
  }
}
