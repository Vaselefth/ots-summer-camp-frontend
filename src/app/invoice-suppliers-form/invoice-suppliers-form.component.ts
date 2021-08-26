import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../invoice';
import { InvoiceSuppliersFormService } from './invoice-suppliers-form.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-invoice-suppliers-form',
  templateUrl: './invoice-suppliers-form.component.html',
  styleUrls: ['./invoice-suppliers-form.component.css']
})
export class InvoiceSuppliersFormComponent implements OnInit {

  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  cities = ['Αθήνα', 'Θεσσαλονίκη', 'Πάτρα','Ηράκλειο','Λάρισα','Βόλος','Ιωάννινα','Τρίκαλα','Χαλκίδα','Σέρρες'];

  constructor(private invoiceSuppliersFormService: InvoiceSuppliersFormService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    
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
    invoice.invoiceType = Number(invoice.invoiceType);
    //transactor.abroad = Number(transactor.abroad); 
    //true = 1 
    console.log(invoice);
    this.postInvoice(invoice);
  } 

  onLogout(){
    this.authService.logout();
  }

}

 


