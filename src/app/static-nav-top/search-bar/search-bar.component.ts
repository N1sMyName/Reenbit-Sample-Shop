import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Services/db/categories.model';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent {
  constructor(private api: MimicrestService, private router: Router) {}

  public data: Product[] = [];
  public list: Product[] = [];
  public queryWindowIsClosed: boolean = true;
  public searchQuery = new FormControl('');

  public classList = {
    'invis': true,
    'search-result': true,
    'no-values': false,
    'no-items': false,
  };

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.data = res;
    });
    console.log(this.searchQuery.value);

    document.addEventListener('keydown', this.handleCloseByEsc.bind(this));
  }
  ngOnDestroy() {
    document.removeEventListener('keydown', this.handleCloseByEsc);
  }
  handleCloseByEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') this.closeResultWindow();
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

  setQuery() {
    // make copy of data
    this.list = [...JSON.parse(JSON.stringify(this.data))];
    if (this.list) {
      this.list = this.list.filter(e =>
        e.title.toLowerCase().includes(this.searchQuery.value)
      );
    }

    this.sortFunction(this.list, 'title');

    this.openResultWindow();

    // input validation
    // checking input value for emptiness
  }
  openResultWindow() {
    this.classList.invis = false;
  }
  closeResultWindow() {
    this.classList.invis = true;
  }
  moveToProduct(id: number) {
    const link = `/products/${id}`;
    this.router.navigateByUrl(link);
    this.closeResultWindow()
  }
}
[];
