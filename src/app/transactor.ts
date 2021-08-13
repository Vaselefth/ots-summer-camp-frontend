export class Transactor {

    constructor(
      public firstName: string,
      public lastName: string,
      public companyName: string,
      public email: string,
      public tin: number,
      public doy: string,
      public address: string,
      public city: string,
      public phoneNumber: string,
      public postalCode: string,
      public transactorType: boolean,
      public abroad: boolean
    ) {}
}