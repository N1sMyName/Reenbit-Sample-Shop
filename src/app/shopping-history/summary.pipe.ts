import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../cart/cart-item.model';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: CartItem[],item?:CartItem): number {
    
   return +value.reduce((acc,c)=>{return acc + (c.product.price * c.count)},0).toFixed(2)
  }

}
