import { Injectable } from '@angular/core';
import { Product } from 'src/app/Services/db/Product.model';
import { countBy, forOwn, uniqBy, forIn } from 'lodash';
type str_num = string | number;
@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  public category: string = 'All Products';
  private filteredBrands: str_num[];
  private filteredRating: str_num[];

  // PRICE RANGE
  countPriceRange(products: Product[]) {
    // low
    let high = Math.round(
      products.reduce(
        (acc, cur) => (cur.price > acc ? (acc = cur.price) : acc),
        0
      )
    );
    // high
    let low = Math.floor(
      products.reduce(
        (acc, cur) => (cur.price < acc ? (acc = cur.price) : acc),
        high
      )
    );
    return [low, high];
  }
  // COUNT BRANDS
  countBrands(products: Product[]) {
    return uniqBy(products, (p) => p.brand)
      .map((product) => product.brand)
      .filter(Boolean);
  }

  // COUNT CATEGORIES
  countCategories(products: Product[]) {
    let result: { name: string; count: number }[] = [];
    forIn(
      countBy(products, (p) => p.category),
      (v, k) => result.push({ name: k, count: v })
    );
    return result;
  }

  // MERGING FILTERS
  rootFilter(
    products: Product[],
    categoryName: string,
    price: number[],
    brands: { [key: string]: boolean },
    ratings: { [key: number]: boolean }
  ): Product[] {
    let res = products;
    // CATEGORY FILTER
    // trigger if any category that was chosen(1)
    if (categoryName) {
      res = res.filter((p) => p.category === categoryName);
    }
    // PRICE FILTER
    // price is a tuple[minVal,maxVal]
    // trigger when price defined and have both values(min and max)
    if (price && price[0] && price[1]) {
      res = res.filter(
        (product) => product.price <= price[1] && product.price >= price[0]
      );
    }
    // BRANDS FILTER
    // function transform [key:string]:boolean to sting[] where value is key if value was true
    this.filteredBrands = this.handleCheckboxes(brands);
    this.handleCheckboxes(brands);
    if (this.filteredBrands?.length) {
      res = this.filteredBrands.flatMap((b) =>
        res.filter((p) => p.brand === b)
      );
    }
    // RATING FILTER
    // function transform [key:number]:boolean to number[] where value is key if value was true
    this.filteredRating = this.handleCheckboxes(ratings);
    if (this.filteredRating?.length) {
      res = this.filteredRating.flatMap((b) =>
        res.filter((p) => p.rating === +b)
      );
    }
    return res;
  }
  handleCheckboxes(obj: { [key: str_num]: boolean }) {
    let checked: str_num[] = [];
    forOwn(obj, (value, key) => {
      if (value) {
        checked.push(key);
      }
    });
    return checked;
  }
  // SORT
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
      default:
        return products;
    }
  }
}
