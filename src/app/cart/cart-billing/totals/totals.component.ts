import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.sass']
})
export class TotalsComponent implements OnInit {

  constructor(public cart:CartService) { }
  @Input() form:FormGroup
  ngOnInit(): void {
    
  }
get billing(){
  return this.form.get('billing')
}

}
