import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactor } from '../transactor';
import { TRANSACTORS_API } from '../consts/api.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactorShowService {

  loadedTransactors: Transactor[] = [];

  constructor(private http: HttpClient) { }

  numberOnlyService(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onGetTransactors(): Transactor[] {
    this.http.get<{ [key: string]: Transactor}>(
      TRANSACTORS_API
    ).pipe(
      map(responseData=> {
      const transactorsArray = [];
      for(let key in responseData) {
        if(responseData.hasOwnProperty(key)) {
          transactorsArray.push({ ...responseData[key], id: key});
        }
      }
      return transactorsArray;
    }))
    .subscribe(
      (responseData) => {
        console.log(responseData);
        this.loadedTransactors = responseData;
      },
      (error) => {
        console.log(error);
        alert("Error loading");
        this.loadedTransactors = [];
      }
    );
    return this.loadedTransactors;
  }
}
