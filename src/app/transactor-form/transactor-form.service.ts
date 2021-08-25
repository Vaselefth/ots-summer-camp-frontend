import { Injectable } from '@angular/core';
import { Transactor } from '../transactor';
import { HttpClient } from '@angular/common/http';
import { TRANSACTORS_API } from '../consts/api.constants';

@Injectable({
  providedIn: 'root'
})
export class TransactorFormService {

  constructor(private http: HttpClient) { }

   numberOnlyService(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  } 

  onCreatePost(postData: {transactor: Transactor}) {
    this.http.post<Transactor>(
      TRANSACTORS_API, 
      postData
      ).subscribe(
        (responseData) => {
          console.log(responseData);
          alert("Το άνοιγμα νέας καρτέλας καταχωρήθηκε επιτυχώς");
      },
        (error) => {
          console.log(error);
          alert("Error - Ανεπιτυχής Καταχώρηση");
        }
      );
  }
}
