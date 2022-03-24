import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      products: [
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 3,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 4,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 5,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 1,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 4,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 4,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 4,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 4,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
        {
          title: 'Procuct title',
          description: 'space for a small product description',
          rating: 4,
          freshness: 'new',
          farm: 'Grocery Farm Fields',
          delivery: 'Europe',
          inStock: 320,
          activePrice: 20.99,
          oldPrice: 30.99,
          deliveryTime: 1,
        },
      ],
    };
  }
}