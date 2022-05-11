import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './db/categories.model';
import { Product } from './db/Product.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MimicrestService {
  constructor(private afs: AngularFirestore) {}

  products() {
    return this.afs.collection('products').valueChanges() as Observable<
      Product[]
    >;
  }
  categories() {
    return this.afs.collection('categories').valueChanges() as Observable<
      Category[]
    >;
  }

  product(id: number) {
    return this.afs
      .collection('products', (ref) => ref.where('id', '==', id))
      .valueChanges() as Observable<Product[]>;
  }
}
