import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Invoice } from '../invoice';
import { InvoiceSuppliersFormService } from './invoice-form-customer.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { InvoiceType } from '../invoice-type';

@Component({
  selector: 'app-invoice-form-customer',
  templateUrl: './invoice-form-customer.component.html',
  styleUrls: ['./invoice-form-customer.component.css']
})

export class InvoiceFormCustomerComponent implements OnInit {

  baseUrl = 'http://localhost:8080/api/productService';
  invoiceTypeUrl = "http://localhost:8080/api/invoicetypes";

  quantity="";
  tempProduct="";
  productName="";
  productPrice=0;
  productDiscount=0;
  productVat=0;
  totalValue: number = 0;

  productToAdd = {};
  addedProducts = [];

  selectedValue: string = "0";
  loadedProductsAndServices: Product[] = [];
  loadedProducts: Product[] = [];
  loadedServices: Product[] = [];
  types: InvoiceType[] = [];

  @ViewChild('f', { static: false }) signupForm: NgForm;
  cities = ['Αθήνα', 'Θεσσαλονίκη', 'Πάτρα','Ηράκλειο','Λάρισα','Βόλος','Ιωάννινα','Τρίκαλα','Χαλκίδα','Σέρρες'];


  constructor(private invoiceSuppliersFormService: InvoiceSuppliersFormService, private http: HttpClient, private authService: AuthService) { 
  }
  
  ngOnInit(): void {
    this.fetchInvoiceTypes();
    this.fillLoadedProductAndServices();
  }

  private async fillLoadedProductAndServices() {
    await this.fetchPosts();
    setTimeout(() => {
      for(let p of this.loadedProductsAndServices) {
        if(p.product == true) {
          this.loadedProducts.push(p);
        }
    }
    for(let p of this.loadedProductsAndServices) {
        if(p.product == false) {
          this.loadedServices.push(p);
        }
    }
    }, 2000);
  }

  selection(event:any) {
    this.selectedValue = event.target.value;
  }

  numberOnly(event): boolean {
    return this.invoiceSuppliersFormService.numberOnlyService(event);
  }

  postInvoice(postData: {invoice: Invoice}) {
    this.invoiceSuppliersFormService.onCreatePost(postData);
  }

  onRemove(name:string) {
    for(let i = 0; i < this.addedProducts.length; ++i) {
      if (this.addedProducts[i].name === name) {
          this.addedProducts.splice(i,1);
      }
    }
  }

  onAdd() {
    let product = this.signupForm.value.userData;
    this.quantity = product.quantity;
    this.tempProduct = product.product;
    for(let p of this.loadedProductsAndServices) {
      if(this.tempProduct === p.productDescription) {
        this.productName = p.productDescription;
        this.productPrice=p.pricePerItem;
        this.productDiscount=p.discount;
        this.productVat=p.vat.vatValue;
        this.totalValue = Number(((p.pricePerItem - (p.discount * p.pricePerItem) + (p.pricePerItem * p.vat.vatValue)) * Number(this.quantity)).toFixed(2));
        this.productToAdd = {name:this.productName, price: this.productPrice, discount:this.productDiscount, vat:this.productVat, total: this.totalValue};
    }
  }
  this.addedProducts.push(this.productToAdd);
}

  onSubmit() {
    let invoice = this.signupForm.value.userData;
    console.log(invoice);
    //console.log(invoice.invoiceType);
    //this.postInvoice(invoice);  
  } 

  private async fetchPosts() {  
    this.http
      .get<{ [key: string]: Product }>(this.baseUrl)
      .pipe(
        map(responseData => {
          const productArray: Product[] = [];
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
        this.loadedProductsAndServices = posts;
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
