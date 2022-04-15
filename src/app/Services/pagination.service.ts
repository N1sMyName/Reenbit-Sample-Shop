import { Injectable } from '@angular/core';
import { Product } from './db/Product.model';
import { cloneDeep,  } from 'lodash';
import { AsyncSubject, BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  available = 0;
  index = 0;
  step = 5;
  onScreen = this.step;
  cached: Product[] = [];

  subject = new BehaviorSubject<Product[]>([])
 
  products = this.subject.asObservable();

  constructor() {}

  paginationPages(p: Product[], step: number = this.step) {
    return Math.ceil(p.length / step) - (this.onScreen - step);
  }

  getPage(p: Product[], index: number, step: number = this.step) {
    this.available = this.paginationPages(p);
    this.cached = [];
    let res = cloneDeep(p);
    const pointer = step * (index + 1);
    this.index = pointer;

    console.log(`index ${this.index}`);

    res = res.slice(pointer - step, pointer);

    this.cached = res;
    this.setPagination(res);
  }

  setOnScreen(num: number) {
    return (this.onScreen = num);
  }

  setPagination(val: Product[]) {
    this.subject.next(val);
  }

  showMore(p: Product[], index: number, step: number = this.step) {
    this.available = this.paginationPages(p);
    let res = cloneDeep(p);
    const pointer = step + index;
    this.index = pointer;
    
    console.log(`index ${this.index}`);
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
