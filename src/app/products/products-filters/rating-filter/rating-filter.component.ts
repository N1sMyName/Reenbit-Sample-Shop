import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder,FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.sass']
})
export class RatingFilterComponent implements OnInit {
  ratingMax = 5
  loopArray = []

  ratingGroup:FormGroup;
  @ViewChildren('ratingFilter') ratingFilter:QueryList<any>;
  constructor(private fb:FormBuilder) {
    this.ratingGroup = this.fb.group({
      ratingArray:fb.array([])
    })  
   }
  
  ngOnInit(): void {
    
  }
 

  ngAfterViewInit(){
   this.ratingFilter.forEach(e => {
     console.log(e)
    
   })
     
   }

  }


