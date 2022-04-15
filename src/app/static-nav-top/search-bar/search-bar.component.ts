import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent {
  constructor(
    private api: MimicrestService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  public data: Product[] = [];
  public list: Product[] = [];

  public searchQuery = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  public errorMsg = '';

  public dropDownResult = {
    hidden: true,
    'search-result': true,
  };
  public errorStyles = {
    'error-container': true,
    isError: false,
  };

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.data = res;
    });

    document.addEventListener('keydown', this.handleCloseByEsc.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleCloseByEsc);
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

    if (this.list) {
      this.list = this.list.filter((e) =>
        e.title.toLowerCase().includes(this.searchQuery.value)
      );
      this.sortFunction(this.list, 'title');
      this.dropDownResult.hidden = false;
    }

    if (!this.list.length) {
      this.dropDownResult.hidden = true;
      this.errorStyles.isError = true;
      this.errorMsg = 'Prodcuct not found';
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