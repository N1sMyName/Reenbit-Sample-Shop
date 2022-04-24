import { Product } from "../Services/db/Product.model";

export interface CartItem {
    product:Product;
    count:number;
}