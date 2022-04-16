import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { categories } from './db/categories';
import { products } from './db/products';


@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products,
      categories,
      
    };
  }
}
