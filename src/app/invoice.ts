export interface Invoice {
    firstName: string,
    lastName: string,
    companyName: string,
    tin: number,
    doy: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    email: string,
    phoneNumber: string,
    date: Date;
    description: string,
    invoiceType: number,
    productprice: number,
    quantity: number,
    discount: number,
    priorfpa: number,
    vat: number,
    totalamount: number,
    id?: string
}

