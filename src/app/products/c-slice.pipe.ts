import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cSlice'
})
export class CSlicePipe implements PipeTransform {

  transform(value: string,from:number,to:number): string {
    const arr = value.split(' ')
    
    return arr.slice(from,to).toString() 
  }

}
