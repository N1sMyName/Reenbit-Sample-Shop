import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../Services/db/Product.model';
import { MimicrestService } from '../Services/mimicrest.service';


@Component({
  selector: 'app-static-nav-top',
  templateUrl: './static-nav-top.component.html',
  styleUrls: ['./static-nav-top.component.sass'],

})
export class StaticNavTopComponent implements OnInit {
  
  constructor(private api:MimicrestService) {
    
  }
  
  
  
  
  ngOnInit(): void {
    
  }
  
}
