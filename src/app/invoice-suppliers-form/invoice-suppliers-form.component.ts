import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../invoice';
import { InvoiceSuppliersFormService } from './invoice-suppliers-form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice-suppliers-form',
  templateUrl: './invoice-suppliers-form.component.html',
  styleUrls: ['./invoice-suppliers-form.component.css']
})
export class InvoiceSuppliersFormComponent implements OnInit {
  
  @ViewChild('f', { static: false }) signupForm: NgForm;
 
  constructor(private invoiceSuppliersFormService: InvoiceSuppliersFormService, private http: HttpClient) { }

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
    /* transactor.tin = Number(transactor.tin);    
    transactor.transactorType = Number(transactor.transactorType);
    transactor.abroad = Number(transactor.abroad); */
    //true = 1 
    console.log(invoice);
    this.postInvoice(invoice);
  } 

}

 


