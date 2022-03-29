import { Component, OnInit } from '@angular/core';

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
