import { Injectable } from '@angular/core';
import { uniqBy, forOwn, compact } from 'lodash';
import { Product } from '../Services/db/Product.model';
import { countryList } from '../Services/db/countries.model';
import { FormGroup } from '@angular/forms';
import { DxFormComponent } from 'devextreme-angular';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}
  modalStyles = {
    updatedModal:true,
    hidden:true
  }
  emptyFormMessage = 'Chose product to edit'
  selectedRowData: any;
  imageURLPattern = /(https):?(\/\/[^"']*\.(?:png|jpg|jpeg))/;
  lastIndex: number;
  labelMode = 'static' 
  buttonOptions = {
    text: 'Submit',
    type: 'success',
    useSubmitBehavior: true,
  };
  config = {
    freshness: {
      items: ['old', 'fewDays', 'fresh', 'superFresh'],
    },
    farm: {
      items: ['Farm1', 'Farm2', 'Farm3'],
    },
    size: {
      items: ['S', 'M', 'L', 'XL'],
    },
    categories: {
      items: [''],
    },
    subCategories: {
      items: [''],
    },
    brands: {
      items: [''],
    },
    countries: {
      items: countryList,
    },
    buyBy: {
      items: ['psc', 'kgs', 'box', 'pack'],
    },
    deliveryArea: {
      items: ['local', 'global'],
    },
    deliveryTime: {
      items: ['7', '7+'],
    },
    delivery: {
      items: ['option1', 'option2', 'option3'],
    },
  };

  countCategories(products: Product[]) {
    const u = uniqBy(products, 'category');
    const res: string[] = [];
    forOwn(u, (p) => {
      if (typeof p === 'object') {
        res.push(p.category);
      }
    });
    return res;
  }
  countBrands(products: Product[]) {
    const u = uniqBy(products, 'brand');
    const res: string[] = [];
    forOwn(u, (p) => {
      if (typeof p === 'object') res.push(p.brand);
    });
    return compact(res);
  }
  findLatestID(products: Product[]) {
    const sort = products.sort((a, b) => +a.id - +b.id);
    console.log(sort[sort.length - 1])
    return sort[sort.length - 1].id;
  }

  setEmptyFormMessage(message:string) {
    this.emptyFormMessage = message
  }
  toggleModal(cleanUp?:boolean,form?:DxFormComponent){
    this.modalStyles.hidden = !this.modalStyles.hidden
    if(cleanUp && form){
      form.instance.resetValues()
    }
  }
}
