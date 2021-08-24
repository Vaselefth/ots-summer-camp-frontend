import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransactorFormComponent } from './transactor-form/transactor-form.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
//import {DataTablesModule} from 'angular-datatables';  
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';
import { TransactorFormService } from './transactor-form/transactor-form.service';
//import { InvoiceFormCustomerComponent } from './invoice-form-customer/invoice-form-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactorFormComponent,
    ProductsListComponent,
    InvoiceFormCustomerComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule
  ],
  providers: [ProductService,TransactorFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
