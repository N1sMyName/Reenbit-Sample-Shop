import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat/app';
import { CartItem } from '../cart/cart-item.model';
import { CartService } from '../cart/cart.service';
import { Product } from './db/Product.model';
import { updatePhoneNumber } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(
    private store: AngularFirestore,
    private auth: AuthService,
    
   
  ) {}
  itemDoc: AngularFirestoreDocument;
  setUser(user: firebase.User | null) {
    console.log(`store setUser`);
    console.log(user);
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
  test(user: firebase.User | null, prod: Product[]) {
    for(let p of prod) {
      fetch('https://picsum.photos/500').then(res => {
        const id = 'product'+p.id;
        console.log(id)
        p.imgURL = res.url
          console.log(p.imgURL)
        this.store.collection('/products').doc(id).set(p)

      })
      // this.itemDoc = this.store.doc(`/test/${id}`); 
      // this.itemDoc.set({ ...prod });
    }
  
}
  getHistory(user: firebase.User | null) {
    const id = user?.uid;
    return this.store
      .collection('/history/')
      .doc(id)
      .valueChanges() as Observable<CartItem[]>;
  }

  // console.log( this.store.collection('/products').doc('/product1').get().subscribe(r => console.log(r.data())))

  updateHistory(user: firebase.User | null, history?: CartItem[]) {
    const id = user?.uid;
    this.itemDoc = this.store.doc(`/history/${id}`);
    if (user) {
      this.itemDoc.set({ ...history });
    }
  
  }
  deleteOne(user: firebase.User | null, history: CartItem[],uid:number){
    const id = user?.uid;
    this.itemDoc = this.store.doc(`/history/${id}`);
    if (user ) {
    const updated = history?.filter(i => i.product.id !== uid)
    this.itemDoc.set({...updated})
   
    
    
      // this.itemDoc.set({ ...history });
    }
    
  }
  rewriteProduct(user:firebase.User | null,modProd:Product,){
    const id =   'product'+modProd.id 
    this.itemDoc = this.store.doc(`/products/${id}`)
    console.log(user)
    if(user){
      this.itemDoc.set({...modProd})
    } 
  }
  
}
