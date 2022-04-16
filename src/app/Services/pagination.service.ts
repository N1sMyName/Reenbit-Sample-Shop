import { Injectable } from '@angular/core';
import { Product } from './db/Product.model';
import { cloneDeep,  } from 'lodash';
import { AsyncSubject, BehaviorSubject, Subject} from 'rxjs';
import { MimicrestService } from './mimicrest.service';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  // number of pages painted in the page
  available = 0;
  // number that indicate last index of products currently in use
  index = 0;
  //  number of products that paint in the page in one time
  step = 5;
  // number of products that can be added or subtracted by user interaction in one action
  onScreen = this.step;
  // accumulator of products that button showMore accumulating
  cached: Product[] = [];

  subject = new BehaviorSubject<Product[]>([])
 
  products = this.subject.asObservable();

  constructor(private m:MimicrestService) {}

  paginationPages(p: Product[], step: number = this.step) {
    return Math.ceil(p.length / step) - (this.onScreen - step);
  }

  getPage(p: Product[], index: number, step: number = this.step) {
    this.available = this.paginationPages(p);
    this.cached = [];
    let res = cloneDeep(p);
    const pointer = step * (index + 1);
    this.index = pointer;
    res = res.slice(pointer - step, pointer);
    this.cached = res;
    this.setPagination(res);
  }

  setDefault(){

  }

  setOnScreen(num: number) {
    return (this.onScreen = num);
  }

  setPagination(val: Product[]) {
    
    this.subject.next(val);
    this.subject.complete()
  }

  showMore(p: Product[], index: number, step: number = this.step) {
    this.available = this.paginationPages(p);
    let res = cloneDeep(p);
    const pointer = step + index;
    this.index = pointer;
    
    if (this.cached.length) {
      console.log(`if`);
      res = [...this.cached, ...res.slice(pointer - step, pointer)];
      this.cached = res;
      this.onScreen = index;
      console.log(res);

      if (res.length) this.setPagination(res);

    } else {
      console.log(`else`);
      res = [
        ...res.slice(pointer - step, pointer),
        ...res.slice(pointer, pointer + step),
      ];
      console.log(res);
      this.onScreen = index;
      this.cached = res;
      this.setPagination(res);
    }
  }
}
