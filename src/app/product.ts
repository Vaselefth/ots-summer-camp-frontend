import { Vat } from "./vat";

export interface Product {
    id:string;
    productDescription:string;
    pricePerItem:number;
    discount:number;
    product_service:number;
    vat: Vat;
}

