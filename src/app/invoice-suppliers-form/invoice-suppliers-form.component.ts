import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../invoice';
import { InvoiceSuppliersFormService } from './invoice-suppliers-form.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { InvoiceType } from '../invoice-type';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-invoice-suppliers-form',
  templateUrl: './invoice-suppliers-form.component.html',
  styleUrls: ['./invoice-suppliers-form.component.css']
})
export class InvoiceSuppliersFormComponent implements OnInit {
  
  invoiceTypeUrl = "http://localhost:8080/api/invoicetypes";
  types: InvoiceType[] = [];

  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  cities = ['Αθήνα', 'Θεσσαλονίκη', 'Πάτρα','Ηράκλειο','Λάρισα','Βόλος','Ιωάννινα','Τρίκαλα','Χαλκίδα','Σέρρες'];

  constructor(private invoiceSuppliersFormService: InvoiceSuppliersFormService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchInvoiceTypes();
  }


  numberOnly(event): boolean {
    return this.invoiceSuppliersFormService.numberOnlyService(event);
  }

  postInvoice(postData: {invoice: Invoice}) {
    this.invoiceSuppliersFormService.onCreatePost(postData);
  }


   onSubmit() {
    
    let invoice = this.signupForm.value.userData;
    
    //convert tin string to number
     invoice.tin = Number(invoice.tin);    
     invoice.isAbroad = Number(invoice.isAbroad);
     invoice.productprice = Number(invoice.productprice);    
     invoice.quantity = Number(invoice.quantity);   
     invoice.discount = Number(invoice.discount);   
     invoice.priorfpa = Number(invoice.priorfpa);  
     invoice.vat = Number(invoice.vat);  
     invoice.totalamount = Number(invoice.totalamount);  
    
    console.log(invoice);
    this.postInvoice(invoice);
  } 
  
  private fetchInvoiceTypes() {  
    this.http
      .get<{ [key: string]: InvoiceType }>(this.invoiceTypeUrl)
      .pipe(
        map(responseData => {
          const invoiceTypesArray: InvoiceType[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              invoiceTypesArray.push({ ...responseData[key], id: Number(key) });
            }
          }
          return invoiceTypesArray;
        })
      )
      .subscribe(posts => {
        console.log(posts);
        this.types = posts;
      });
  }

  onLogout(){
    this.authService.logout();
  }

}

 


