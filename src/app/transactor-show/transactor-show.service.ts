import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactor } from '../transactor';
import { TRANSACTORS_API } from '../consts/api.constants';
import { TRANSACTORS_API_TIN } from '../consts/api.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactorShowService {

  loadedTransactors: Transactor[] = [];
  transactor = <Transactor>{};

  constructor(private http: HttpClient) { }

  numberOnlyService(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  refresh(): void {
    window.location.reload();
  } 

  onDeleteTransactor(id) {
    id = Number(id);
    const url = `${TRANSACTORS_API}/${id}`;
    this.http.delete(url)
    .subscribe();
    this.refresh(); 
  }

  onGetTransactor(tin): Transactor {
    tin = Number(tin);
    const url = `${TRANSACTORS_API_TIN}/${tin}`;
    this.http.get<Transactor>(url)
    .pipe(
      map((responseData: Transactor) => {
        this.transactor = responseData;
        return responseData;
      }))
    .subscribe(
      (responseData) => {
        this.transactor = responseData;
      },(error) => {
        console.log(error);
        alert("Error Loading - Απέτυχε η φόρτωση των επαφών!");
        this.transactor = null;
      }
    );
    return this.transactor;
  }

  onGetTransactors(): Transactor[] {
    this.http.get<Transactor[]>(TRANSACTORS_API)
    .pipe(
      map((responseData: Transactor[]) => {
        this.loadedTransactors = [...responseData];
        return responseData;
      }))
    .subscribe(
      (responseData) => {
        console.log(responseData);
        this.loadedTransactors = responseData;
      },
      (error) => {
        console.log(error);
        alert("Error Loading - Απέτυχε η φόρτωση των επαφών!");
        this.loadedTransactors = [];
      }
    );
    return this.loadedTransactors;
  }
}