import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Services/db/Product.model';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: Product,amount:number ):number {
    return +(value.price * amount).toFixed(2)
  }

}
