import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RowRemovingEvent } from 'devextreme/ui/data_grid';
import { FieldDataChangedEvent } from 'devextreme/ui/form';
import { SelectionChangedEvent } from 'devextreme/ui/data_grid';
import { AuthService } from '../Services/auth.service';
import { Product } from '../Services/db/Product.model';
import { StoreService } from '../Services/store.service';
import { AdminService } from './admin.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  constructor(
    private aRoute: ActivatedRoute,
    private router: Router,
    public admin: AdminService,
    public store: StoreService,
    private auth: AuthService
    ) {
      this.receiveProducts();
      }
    message:string
    products: Product[] = [];
    product: Product;
    selectedRowData: any;
    unsubscribeAll = new Subject()

  ngOnInit(): void {
    this.assembleConfigProperties();
    
  }
  ngOnDestroy(){
    this.unsubscribeAll.next('')
    this.unsubscribeAll.complete()
  }
  setSelectedRowData(e: SelectionChangedEvent) {
    this.admin.selectedRowData = e.selectedRowsData[0]
  }
  redirectToAdminNew() {
    this.router.navigate(['admin', 'create']);
    this.admin.selectedRowData = null;
  }
  receiveProducts() {
    this.router.events.pipe(takeUntil(this.unsubscribeAll)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.products = this.aRoute.snapshot.data['products'];
      }
    });
  }
  synchronizeForm(e: FieldDataChangedEvent) {
    if (e.component) {
      this.product = e.component.option().formData as Product;
    }
  }
  updateOldProduct(e: SubmitEvent) {
    this.message = 'Product has been updated'
    this.store.rewriteProduct(this.auth.user,this.product || this.admin.selectedRowData)
    this.admin.toggleModal()  
    e.preventDefault();
  }
  assembleConfigProperties() {
    this.admin.config.categories.items = this.admin.counterUtility(this.products,'category')
    this.admin.config.brands.items = this.admin.counterUtility(this.products,'brand')
    this.admin.lastIndex = this.admin.findLatestID(this.products);
  }
  handleDeletion(e:RowRemovingEvent){
    this.message = `Product with id${e.data.id} has been deleted`
    this.store.removeProductPermanently(e.data.id)
    this.admin.toggleModal() 
  }

}
