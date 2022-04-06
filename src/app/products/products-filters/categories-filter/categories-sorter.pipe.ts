import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/Services/db/categories.model';
import { Product } from 'src/app/Services/db/Product.model';

@Pipe({
  name: 'categoriesSorter',
})
export class CategoriesSorterPipe implements PipeTransform {
  transform(value: Category, products: Product[]): number {
    if(products) {
    const result = products.filter((e) => e.category === value.name);
    return result.length;
    }
    return 0
  }
}
 