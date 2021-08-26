import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TransactorFormComponent } from './transactor-form/transactor-form.component';
import { AppRoutingModule } from './app-routing.module';

import { LogInComponent } from './log-in/log-in.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   
//import {DataTablesModule} from 'angular-datatables';  
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';
import { TransactorFormService } from './transactor-form/transactor-form.service';
import { TransactorShowComponent } from './transactor-show/transactor-show.component';
import { TransactorShowService } from './transactor-show/transactor-show.service';
import { InvoiceFormCustomerComponent } from './invoice-form-customer/invoice-form-customer.component';
import { InvoiceSuppliersFormComponent } from './invoice-suppliers-form/invoice-suppliers-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactorFormComponent,
    TransactorShowComponent,
    InvoiceFormCustomerComponent,
    ProductsListComponent,
    TransactorShowComponent,  
    InvoiceSuppliersFormComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,

    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule,

  ],
  providers: [ProductService,TransactorFormService,TransactorShowService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
