import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ProductComponent } from 'src/app/products/products-list/product/product.component';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  constructor(private api: MimicrestService, private router:Router) {}
  public data: Product[] = [];
  public defaultData:Product[] = []
  public searchQuery: string = '';
  public flag = false

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.data = res;
      this.defaultData = res;
      
    });
    
    document.addEventListener('click',()=>{
      this.flag = false
    })
  }
  // alphabet sort
  sortFunction(data: Product[]) {
    // compare function
    function compare(a: Product, b: Product) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    this.data = this.data.sort(compare);
  }
  ngAfterViewChecked() {
    this.sortFunction(this.data);
  }


  setQuery(inputRef: HTMLInputElement,boxRef:HTMLUListElement) {
    this.data = this.defaultData
    this.searchQuery = inputRef.value.toLowerCase()
    if(this.data) {
     this.data =  this.data.filter(e => e.title.toLowerCase().includes(this.searchQuery ))
    }
    this.flag = true
    boxRef.classList.toggle('invis')
    
    
  }
  closeResultWindow(boxRef:HTMLUListElement){
    boxRef.classList.add('invis')
  }
  moveToProduct(id:number,boxRef:HTMLUListElement) {
    const link = `/products/${id}`
    this.router.navigateByUrl(link)
    this.closeResultWindow(boxRef)
  }

}
[];
