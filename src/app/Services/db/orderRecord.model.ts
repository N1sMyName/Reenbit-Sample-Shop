import { CartItem } from "src/app/cart/cart-item.model";

export interface OrderRecord {
    orderDate:number;
    orderProducts:CartItem[];
    orderInfo:OrderInfo;
}

export interface OrderProduct {
    id:number;
    amount:number;
}
export interface OrderInfo {
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:number;
    address:string;
    city:string;
    country:string;
    zip:number;
    addInfo:string;
}