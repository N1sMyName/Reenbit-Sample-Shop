import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartValidationService {

  constructor() { }
  formSub = new Subject()
  formObs = this.formSub.asObservable()
}
