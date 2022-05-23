import { Injectable } from '@angular/core';
import { uniqBy, forOwn, compact } from 'lodash';
import { Product } from '../Services/db/Product.model';
import { countryList } from '../Services/db/countries.model';
import { DxFormComponent } from 'devextreme-angular';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}
  modalStyles = {
    updatedModal: true,
    hidden: true,
  };
  validationStatus:string;
  emptyFormMessage = 'Chose product to edit';
  selectedRowData: Product | null;
  imageURLPattern = /(https):?(\/\/[^"']*\.(?:png|jpg|jpeg))/;
  lastIndex: number;
  labelMode = 'static';
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

  counterUtility(products: Product[], constrain: string) {
    const uniqProducts = uniqBy(products, constrain);
    let res: unknown[] = [];

    forOwn(uniqProducts, (p) => {
      if (typeof p === 'object') {

        type CountBy = keyof typeof p;
        const prop = constrain as CountBy;
          let value = p[prop];
          res.push(value);
      }
    });

    return compact(res as string[]) || [] ;
  }
  
  findLatestID(products: Product[]) {
    const sort = products.sort((a, b) => +a.id - +b.id);
    return sort[sort.length - 1].id;
  }

  setEmptyFormMessage(message: string) {
    this.emptyFormMessage = message;
  }
  toggleModal(cleanUp?: boolean, form?: DxFormComponent) {
    this.modalStyles.hidden = !this.modalStyles.hidden;
    if (cleanUp && form) {
      form.instance.resetValues();
    }
  }
}
