export interface Form {
  categoryName: string;
  price: number[];
  brands: { [key: string]: boolean };
  ratings: { [key: number]: boolean };
}
