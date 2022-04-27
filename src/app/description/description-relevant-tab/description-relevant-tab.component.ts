import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Services/db/Product.model';

@Component({
  selector: 'app-description-relevant-tab',
  templateUrl: './description-relevant-tab.component.html',
  styleUrls: ['./description-relevant-tab.component.sass']
})
export class DescriptionRelevantTabComponent implements OnInit {
  @Input() relevantProducts:Product[]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  moveToProduct(id:number){
    this.router.navigate(['/products/',id])
  }
  moveToHome(){
    this.router.navigate(['/products',])
    
  }

}
