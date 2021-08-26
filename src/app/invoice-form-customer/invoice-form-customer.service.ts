import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../invoice';
import { Product } from '../product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceSuppliersFormService {
 baseUrl = 'http://localhost:8080/api/productService';  

 loadedProducts: Product[] = [];


  constructor(private http: HttpClient) { }

  numberOnlyService(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onCreatePost(postData: {invoice: Invoice}) {
    this.http.post<Invoice>(
        this.baseUrl, 
      postData
      ).subscribe(
        (responseData) => {
          console.log(responseData);
          alert("Το τιμολόγιο καταχωρήθηκε επιτυχώς");
      },
        (error) => {
          console.log(error);
          alert("Error - Ανεπιτυχής Καταχώρηση");
        }
      );
  }

  onGetProducts(): Product[] {
    this.http.get<Product[]>(this.baseUrl)
    .pipe(
      map((responseData: Product[]) => {
        this.loadedProducts = [...responseData];
        return responseData;
      }))
    .subscribe(
      (responseData) => {
        console.log(responseData);
        this.loadedProducts = responseData;
      },
      (error) => {
        console.log(error);
        alert("Error Loading - Απέτυχε η φόρτωση των επαφών!");
        this.loadedProducts = [];
      }
    );
    return this.loadedProducts;
  }

}