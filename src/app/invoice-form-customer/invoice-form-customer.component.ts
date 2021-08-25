import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../invoice';
import { InvoiceSuppliersFormService } from './invoice-form-customer.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form-customer',
  templateUrl: './invoice-form-customer.component.html',
  styleUrls: ['./invoice-form-customer.component.css']
})

export class InvoiceFormCustomerComponent implements OnInit {

  userForm: FormGroup
  listData: any[];

  @ViewChild('f', { static: false }) signupForm: NgForm;


  constructor(private fb:FormBuilder, private invoiceSuppliersFormService: InvoiceSuppliersFormService, private http: HttpClient) { 

    this.listData = [];

    this.userForm = this.fb.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      ContactNo: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  numberOnly(event): boolean {
    return this.invoiceSuppliersFormService.numberOnlyService(event);
  }

  postInvoice(postData: {invoice: Invoice}) {
    this.invoiceSuppliersFormService.onCreatePost(postData);
  }

  addItem(){
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }

  removeItems(element:any){
    this.listData.forEach((value:any,dex:any) => {
      if(value == element){
        this.listData.splice(dex,1)
      }

    });


  }
}
