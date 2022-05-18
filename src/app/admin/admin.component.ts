import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Product } from '../Services/db/Product.model';
import { StoreService } from '../Services/store.service';
import { AdminService } from './admin.service';

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

  ngOnInit(): void {
    this.assembleConfigProperties();
    
  }
  setSelectedRowData(rowData: any) {
      this.admin.selectedRowData = rowData.component.getSelectedRowsData()[0]
  }
  redirectToAdminNew() {
    this.router.navigate(['admin', 'create']);
    this.admin.selectedRowData = null;
  }
  receiveProducts() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.products = this.aRoute.snapshot.data['products'];
      }
    });
  }
  synchronizeForm(e: any) {
    if (e.component) {
      this.product = e.component.option().formData as Product;
    }
  }
  updateOldProduct(e: any) {
    this.message = 'Product has been updated'
    this.store.rewriteProduct(this.auth.user,this.product || this.admin.selectedRowData)
    this.admin.toggleModal()  
    e.preventDefault();
  }
  assembleConfigProperties() {
    this.admin.config.categories.items = this.admin.countCategories(
      this.products
    );
    this.admin.config.brands.items = this.admin.countBrands(this.products);
    this.admin.lastIndex = this.admin.findLatestID(this.products);
  }
  handleDeletion(e:any){
    this.message = `Product with id${e.data.id} has been deleted`
    this.store.removeProductPermanently(e.data.id)
    this.admin.toggleModal() 
  }

}
