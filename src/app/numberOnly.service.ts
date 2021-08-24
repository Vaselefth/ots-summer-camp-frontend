import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NumberOnlyService {

  constructor() { }

  numberOnlyService(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}