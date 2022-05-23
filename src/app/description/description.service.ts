import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }
  noTaxPrice = 0;
  rate = 0.18;
  tax = 0;
  
}
