export interface Category {
    id:number;
    name:string;
    sub:SubCategory[];

}

export interface SubCategory {
    id:number;
    name:string;
}