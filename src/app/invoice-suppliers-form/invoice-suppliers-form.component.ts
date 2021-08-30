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

  
  quantity="";
  tempProduct="";
  productName="";
  productPrice=0;
  productDiscount=0;
  productVat=0;
  totalValue: number = 0;

  productToAdd = {};
  addedProducts = [];

  loadedProducts: Invoice[] = [];
  baseUrl = 'http://localhost:8080/api/productService';
  
  invoiceTypeUrl = "http://localhost:8080/api/invoicetypes";
  types: InvoiceType[] = [];

  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  cities = ['Αθήνα', 'Θεσσαλονίκη', 'Πάτρα','Ηράκλειο','Λάρισα','Βόλος','Ιωάννινα','Τρίκαλα','Χαλκίδα','Σέρρες'];

  constructor(private invoiceSuppliersFormService: InvoiceSuppliersFormService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchPosts();
    this.fetchInvoiceTypes();
  }


  numberOnly(event): boolean {
    return this.invoiceSuppliersFormService.numberOnlyService(event);
  }

  postInvoice(postData: {invoice: Invoice}) {
    this.invoiceSuppliersFormService.onCreatePost(postData);
  }

  /* onRemove(name:string) {
    for(let i = 0; i < this.addedProducts.length; ++i) {
      if (this.addedProducts[i].name === name) {
          this.addedProducts.splice(i,1);
      }
    }
  }

  onAdd(){
    let product = this.signupForm.value.userData;
    this.quantity = product.quantity;
    this.tempProduct = product.product;
    for(let p of this.loadedProducts) {

     this.productName=p.productName;
        this.productPrice=p.productprice;
        this.productDiscount=p.discount;
        this.productVat=p.vat;
        this.totalValue = Number(((p.productprice - (p.discount * p.productprice) + (p.productprice * p.vat)) * Number(this.quantity)).toFixed(2));
        this.productToAdd = {name:this.productName, price: this.productPrice, discount:this.productDiscount 
  } */

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

   private fetchPosts() {  
    this.http
      .get<{ [key: string]: Invoice }>(this.baseUrl)
      .pipe(
        map(responseData => {
          const productArray: Invoice[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              productArray.push({ ...responseData[key], id: key });
            }
          }
          return productArray;
        })
      )
      .subscribe(posts => {
        console.log(posts);
        this.loadedProducts = posts;
      });
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

 


