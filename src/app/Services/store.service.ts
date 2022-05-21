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
import { OrderRecord } from './db/orderRecord.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: AngularFirestore, private auth: AuthService) {
  
  }
  userShoppingHistory:OrderRecord[] = []
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
  removeProductPermanently(id: number) {
    const docId = 'product' + id;
    this.itemDoc = this.store.doc(`/products/${docId}`);
    if (this.auth.user) {
      this.itemDoc.delete();
    }
  }
  // shopping history
  getShoppingHistory(user: firebase.User | null) {
    const id = user?.uid;
    return this.store
      .collection('/shoppingHistory/')
      .doc(id)
      .valueChanges() as Observable<OrderRecord[]>;
  }
  updateShoppingHistory(user: firebase.User | null, records?: OrderRecord[]) {
    const id = user?.uid;
    this.itemDoc = this.store.doc(`/shoppingHistory/${id}`);
    if (user) {  
      this.itemDoc.set({ ...records });
    }
  }
  
}
