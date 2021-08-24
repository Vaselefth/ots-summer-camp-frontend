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
<<<<<<< HEAD
//import { InvoiceFormCustomerComponent } from './invoice-form-customer/invoice-form-customer.component';
=======
import { TransactorShowComponent } from './transactor-show/transactor-show.component';
import { TransactorShowService } from './transactor-show/transactor-show.service';
>>>>>>> origin/Vasilis-Branch

@NgModule({
  declarations: [
    AppComponent,
    TransactorFormComponent,
<<<<<<< HEAD
    ProductsListComponent,
    InvoiceFormCustomerComponent
=======
    TransactorShowComponent
>>>>>>> origin/Vasilis-Branch
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule
  ],
<<<<<<< HEAD
  providers: [ProductService,TransactorFormService],
=======
  providers: [TransactorFormService,TransactorShowService],
>>>>>>> origin/Vasilis-Branch
  bootstrap: [AppComponent]
})
export class AppModule { }
