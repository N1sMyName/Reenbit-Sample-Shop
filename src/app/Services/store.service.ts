import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';
import { CartItem } from '../cart/cart-item.model';
import { Product } from './db/Product.model';
import { products } from './db/products';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}
  itemDoc: AngularFirestoreDocument;
  setUser(user: firebase.User | null) {
    if (user) {
      this.store.firestore.collection('/users').add({
        name: user.displayName,
        userId: user.uid,
        email: user.email,
        provider: user.providerData[0]?.providerId,
        photoURL: user.photoURL,
        history: [null],
      });
    }
  }
  // test(user: firebase.User | null, prod: Product[]) {
  //   for (let p of prod) {
  //     fetch('https://picsum.photos/500').then((res) => {
  //       const id = 'product' + p.id;
  //       p.imgURL = res.url;
  //       this.store.collection('/products').doc(id).set(p);
  //     });
  //   }
  // }
  getHistory(user: firebase.User | null) {
    const id = user?.uid;
    return this.store
      .collection('/history/')
      .doc(id)
      .valueChanges() as Observable<CartItem[]>;
  }
  updateHistory(user: firebase.User | null, history?: CartItem[]) {
    const id = user?.uid;
    this.itemDoc = this.store.doc(`/history/${id}`);
    if (user) {
      this.itemDoc.set({ ...history });
    }
  }
  deleteOne(user: firebase.User | null, history: CartItem[], uid: number) {
    const id = user?.uid;
    this.itemDoc = this.store.doc(`/history/${id}`);
    if (user) {
      const updated = history?.filter((i) => i.product.id !== uid);
      this.itemDoc.set({ ...updated });
    }
  }
  rewriteProduct(user: firebase.User | null, modProd: Product) {
    const id = 'product' + modProd.id;
    this.itemDoc = this.store.doc(`/products/${id}`);
    if (user) {
      this.itemDoc.set({ ...modProd });
    }
  }
  addProduct(user: firebase.User | null, product: Product, id: number) {
    const newId = 'product' + (id + 1);
    this.itemDoc = this.store.doc(`/products/${newId}`);
    if (user) {
      product.id = id + 1;
      this.itemDoc.set({ ...product });
    }
  }
  removeProductPermanently(id:number){
    const docId = 'product' + id
    this.itemDoc = this.store.doc(`/products/${docId}`)
    if(this.auth.user) {
      this.itemDoc.delete()
    }
  }
}
