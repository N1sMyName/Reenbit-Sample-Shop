import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService {

  constructor() { }
  createDb() {
    return {
       products:  [
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
        {title:'Procuct title',
        description:'space for a small product description',
        rating:4,
        freshness:'new',
        farm:'Grocery Farm Fields',
        devivery:'Europe',
        inStock:320,
        activePrice: 20.99,
        oldPrice:30.99,
        deviveryTime:1
        },
    ]
    }
  }
}

