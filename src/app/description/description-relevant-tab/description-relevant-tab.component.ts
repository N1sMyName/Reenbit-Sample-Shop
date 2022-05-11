import { Component, Input, ViewEncapsulation,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/Services/db/Product.model';







@Component({
  selector: 'app-description-relevant-tab',
  templateUrl: './description-relevant-tab.component.html',
  styleUrls: ['./description-relevant-tab.component.sass'],
  encapsulation: ViewEncapsulation.None,
 
  
})
export class DescriptionRelevantTabComponent {
  @Input() relevantProducts: Product[];
  constructor(private router:Router) {}



  moveToProduct(id: number) {
    this.router.navigate(['/products/', id]);
  }
  moveToHome() {
    this.router.navigate(['/products']);
  }


}
