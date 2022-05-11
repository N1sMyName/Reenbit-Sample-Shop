import { CartItem } from "src/app/cart/cart-item.model";

export interface User {
    displayName:string;
    userId:string;
    email:string;
    provider:string;
    photoURL:string;
    history?:CartItem[]
}