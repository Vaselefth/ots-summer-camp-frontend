import { Time } from "@angular/common";

export interface Invoice {
    firstName: string,
    lastName: string,
    companyName: string,
    tin: number,
    doy: string,
    address: string,
    city: string,
    postalCode: string,
    isAbroad: number,
    email: string,
    phoneNumber: string,
    date: Date,
    time: Time,
    description: string,
    invoiceType: string,
    isProduct: number,
    productName: string,
    productprice: number,
    quantity: number,
    discount: number,
    priorfpa: number,
    vat: number,
    totalamount: number,
    id?: string
}

