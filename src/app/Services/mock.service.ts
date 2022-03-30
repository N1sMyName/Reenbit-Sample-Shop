import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { products } from './db/products';
import {categories} from './db/categories'

@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products,
      categories
    };
  }
}
