import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent {
  @ViewChild('searchBar') searchBar: ElementRef;

  public data: Product[] = [];
  public list: Product[] = [];

  public errorMsg = '';

  public dropDownResult = {
    hidden: true,
    'search-result': true,
  };
  public errorStyles = {
    'error-container': true,
    isError: false,
  };
  public searchQuery = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(
    private api: MimicrestService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  //

  fetchProducts() {
    this.api.getProducts().subscribe((res) => {
      this.data = res;
    });
  }

  handleEscFunctionality(action: boolean) {
    action
      ? this.searchBar.nativeElement.addEventListener(
          'keydown',
          this.handleCloseByEsc.bind(this)
        )
      : this.searchBar.nativeElement.removeEventListener(
          'keydown',
          this.handleCloseByEsc.bind(this)
        );
  }
  ngOnInit(): void {
    this.fetchProducts();
  }
  
  ngAfterViewInit(): void {
    this.handleEscFunctionality(true);
  }

  ngOnDestroy(): void {
    this.handleEscFunctionality(false)
  }

  handleCloseByEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.dropDownResult.hidden = true;
      this.errorStyles.isError = false;
    }
  }
  handleSearchByEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  // alphabet sort
  sortFunction(data: Product[], param: keyof Product) {
    // compare function
    function compare(a: Product, b: Product) {
      if (a[param] < b[param]) return -1;
      if (a[param] > b[param]) return 1;
      return 0;
    }
    // setting sorted data
    this.list = data.sort(compare);
  }
  checkValidity() {
    if (!this.searchQuery.errors) {
      this.errorStyles['isError'] = false;
    }
  }

  search() {
    if (this.searchQuery.errors) {
      this.errorStyles['isError'] = true;
      this.errorMsg = 'Required min-length 3';
      this.dropDownResult.hidden = true;
      return;
    }
    // make copy of data
    this.list = [...JSON.parse(JSON.stringify(this.data))];

    
      this.list = this.list.filter((e) =>
        e.title.toLowerCase().includes(this.searchQuery.value)
      );
      this.sortFunction(this.list, 'title');
      this.dropDownResult.hidden = false;
    

    if (!this.list.length) {
      this.dropDownResult.hidden = true;
      this.errorStyles.isError = true;
      this.errorMsg = 'Product not found';
    }
  }

  closeResultWindow() {
    this.dropDownResult.hidden = true;
  }
  moveToProduct(id: number) {
    const link = `/products/${id}`;
    this.router.navigateByUrl(link);
    this.closeResultWindow();
  }
}
[];
