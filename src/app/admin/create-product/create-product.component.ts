import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import { AuthService } from 'src/app/Services/auth.service';
import { Product } from 'src/app/Services/db/Product.model';
import { StoreService } from 'src/app/Services/store.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateProductComponent implements OnInit {
  constructor(
    public admin: AdminService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private store: StoreService,
    private auth: AuthService
  ) {
    this.receiveProducts();
  }
  @ViewChild('form', { static: false }) form: DxFormComponent;
  products: Product[] = [];
  product: Product;

  ngOnInit(): void {
    this.assembleConfigProperties();
  }

  assembleConfigProperties() {
    this.admin.config.categories.items = this.admin.counterUtility(
      this.products,'category'
    );
    this.admin.config.brands.items = this.admin.counterUtility(this.products,'brand');
    this.admin.lastIndex = this.admin.findLatestID(this.products);
  }

  receiveProducts() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.products = this.aRoute.snapshot.data['products'];
      }
    });
  }
  updateProduct(e: any) {
    if (e.component) {
      this.product = e.component.option().formData as Product;
    }
  }
  addNewProduct(e: any) {
    this.store.addProduct(this.auth.user, this.product, this.admin.lastIndex);
    setTimeout(()=>this.admin.toggleModal(),2000)
    this.admin.toggleModal();
    this.form.instance.resetValues();
    e.preventDefault();
  }
  
  handleModal() {
    this.admin.toggleModal();
  }
}
