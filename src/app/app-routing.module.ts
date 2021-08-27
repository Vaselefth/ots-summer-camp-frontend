import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceSuppliersFormComponent } from './invoice-suppliers-form/invoice-suppliers-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TransactorFormComponent } from './transactor-form/transactor-form.component';
import { TransactorShowComponent } from './transactor-show/transactor-show.component';
import { InvoiceFormCustomerComponent } from './invoice-form-customer/invoice-form-customer.component';
import { MenuComponent } from './menu/menu.component';
import { LogInComponent } from './log-in/log-in.component';


const appRoutes: Routes = [
  { path: '', component: LogInComponent },
  {path: 'menu',  component: MenuComponent },
  { path: 'menu/clientInvoice', component: InvoiceFormCustomerComponent },
  { path: 'menu/supplierInvoice', component: InvoiceSuppliersFormComponent },
  { path: 'menu/searchInvoice', component: ProductsListComponent },
  { path: 'menu/transactors', component: TransactorFormComponent },
  { path: 'menu/searchTransactor', component: TransactorShowComponent },
  { path: 'menu/products', component: ProductsListComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];
  
  
    
   

@NgModule({
  imports: [

    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
