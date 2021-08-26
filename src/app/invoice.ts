export interface Invoice {
    firstName: string,
    lastName: string,
    companyName: string,
    tin: number,
    doy: string,
    address: string,
    city: string,
  postalCode: string,
  country: number,
    email: string,
    phoneNumber: string,
    date: Date;
    invoiceType: number,
    description: string,
    productprice: number,
    quantity: number,
    discount: number,
    priorfpa: number,
    vat: number,
    totalamount: number,
    id?: string
   
}

