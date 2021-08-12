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
      public phoneNumber: number,
      public postalCode: string,
      public transactorType: number,
      public isAbroad: number
    ) {}
}