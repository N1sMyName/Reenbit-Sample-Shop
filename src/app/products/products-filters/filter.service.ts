import { Injectable } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { products } from 'src/app/Services/db/products';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public category: string = 'All Products';

  constructor() {}

  // price Range
  countPriceRange(products: Product[]) {
    // high
    let highestVal = 0;
    if (products) {
      products.forEach((p) => {
        if (p.price > highestVal) {
          highestVal = Math.round(p.price);
        }
      });
      // high

    } 
      let lowestVal = highestVal;
      products.forEach((p) => {
        if (p.price < lowestVal) {
          lowestVal = Math.floor(p.price);
        }
      });
    return [lowestVal, highestVal];
  }
  // count Brands
  countBrands(products: Product[]) {
    let brands: string[] = [];
    for (let p of products) {
      if (!brands.includes(p.brand) && p.brand) {
        brands.push(p.brand);
      }
    }
    return brands;
  }

  // count Categories
  countCategories(products: Product[]) {
    let categoriesNames: string[] = [];
    for (let p of products) {
      if (!categoriesNames.includes(p.category) && p.category) {
        categoriesNames.push(p.category);
      }
    }
    let categories = [];
    for (let n of categoriesNames) {
      let count = 0;
      for (let p of products) {
        if (n === p.category) {
          count++;
        }
      }
      categories.push({ name: n, count: count });
    }
    return categories;
  }

  // root
  rootFilter(
    products: Product[],
    categoryName?: string,
    price?: number[],
    brands?: { [key: string]: boolean },
    ratings?: { [key: number]: boolean }
  ): Product[] {
    let res = products;

    if (categoryName) {
      res = res.filter((p) => p.category === categoryName);
    } 
    if (price && price[0] && price[1] ) {

      res = res.filter((p) => p.price <= price[1] && p.price >= price[0]);
    } 

    if (brands && Object.entries(brands).filter((b) => b[1] === true).length) {
      const brandsArray = Object.entries(brands).filter((b) => b[1] === true);
      res = brandsArray.flatMap((b) => res.filter((p) => p.brand === b[0]));
    } 
    if (
      ratings &&
      Object.entries(ratings).filter((b) => b[1] === true).length
    ) {
      const ratingsArray = Object.entries(ratings).filter((b) => b[1]);
      res = ratingsArray.flatMap((r) => res.filter((p) => p.rating === +r[0]));
    } 
    return res;
  }

  sortBy(method: string, products: Product[]): Product[] {
    const sortHelper = (key: keyof Product) => {
      const p = products.sort((a: Product, b: Product) => {
        return +a[key] - +b[key];
      });
      return p;
    };
    switch (method) {
      case 'Price(asc)':
        return sortHelper('price');
      case 'Price(desc)':
        return sortHelper('price').reverse();
      case 'Rating':
        return sortHelper('rating').reverse();
      default :
      return products
    }
  }
}
