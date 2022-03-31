import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Services/db/categories.model';
import { Product } from 'src/app/Services/db/Product.model';
import { MimicrestService } from 'src/app/Services/mimicrest.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent  {
  constructor(private api: MimicrestService, private router:Router) {}

  @ViewChild('searchRes') searchRes:ElementRef;
  @ViewChild('queryInput') queryInput:ElementRef;
  @Input() categories:Category[]

  public data: Product[] = [];
  public defaultData:Product[] = []
  public searchQuery: string = '';

  ngOnInit(): void {
    this.api.getProducts().subscribe((res) => {
      this.data = res;
      this.defaultData = res;
      
    });
    console.log(this.categories)
    
    document.addEventListener('keydown',(event:KeyboardEvent)=>{
      if(event.key === 'Escape') this.closeResultWindow()
    })
    
  }
  
  // alphabet sort
  sortFunction(data: Product[]) {
    // compare function
    function compare(a: Product, b: Product) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
    // setting sorted data
    this.data = this.data.sort(compare);
  }
  ngAfterViewChecked() {this.sortFunction(this.data)}
  


  setQuery() {
    // make copy of data
    this.data = this.defaultData
    this.searchQuery = this.queryInput.nativeElement.value.toLowerCase()
    if(this.data) {
     this.data =  this.data.filter(e => e.title.toLowerCase().includes(this.searchQuery ))
    }
    // input validation
    // checking input value for emptiness
    if(!this.queryInput.nativeElement.value) {
      console.log(`no input`)
      setTimeout(()=>this.queryInput.nativeElement.classList.remove('noQuery'),600)
      
      this.queryInput.nativeElement.classList.add('noQuery')
      this.closeResultWindow()
    }
     // checking if data is available for query
    if(this.queryInput.nativeElement.value && 
      this.queryInput.nativeElement.value.length && 
      this.data.length){
       this.openResultWindow()}

        // setting value to default if no product occur
        // notify user
    if(!this.data.length) {
      console.log('no data')
      this.queryInput.nativeElement.value = ''
      this.queryInput.nativeElement.placeholder = 'No such product'
      this.closeResultWindow()
    }
  }
  openResultWindow(){
    this.searchRes.nativeElement.classList.remove('invis')
    
  }
  closeResultWindow(){
    this.searchRes.nativeElement.classList.add('invis')
  }
  moveToProduct(id:number,) {
    const link = `/products/${id}`
    this.router.navigateByUrl(link)
    this.closeResultWindow()
  }


}
[];
