import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductsListComponent } from './products-list/products-list.component';


const appRoutes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'clientInvoice', component: ProductsListComponent },
  { path: 'supplierInvoice', component: ProductsListComponent },
  { path: 'searchInvoice', component: ProductsListComponent },
  { path: 'transactors', component: ProductsListComponent },
  { path: 'products', component: ProductsListComponent } ];
  /* { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
] */

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}