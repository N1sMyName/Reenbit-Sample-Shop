

export interface Product {
  id?:number;
  title: string;
  inStock: number;
  freshness: string;
  farm: string;
  size?:string;
  description: string;
  descriptionSmall: string;
  rating: number;
  country?:string;
  price:number;
  delivery: string;
  deliveryArea?: string;
  deliveryTime: number;
  buyBy?:string[];
  reviews?:Review[];
  comments?:Comment[];
}

export interface Review {
  reviewer:string;
  reviewText:string;
  rDate: string;
  estimation:number;
  comments:Comment[];
}

export interface Comment {
  commenter:string;
  cDate:string;
  cText:string;
}

export interface Question {
  questioner : string;
  qText : string;
  qDate: string;
  likes: number;
  dislikes: number; 


}




