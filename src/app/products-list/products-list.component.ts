import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {Router} from "@angular/router";
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductService]
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;

//private productsTest: any = [];
//public pricePerItem: string = '';


  constructor(private http: HttpClient, private router: Router, private productService: ProductService) { 
  }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductList();
  
  }



  private baseUrl = 'http://localhost:8080/api/productService';  
  
   private getProductList() {  
    this.http.get(this.baseUrl).subscribe(response => {
      console.log(response);
    
      return response;
    });  
  } 

    /*  getProductList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
      
    } 
 */
  

 /*  getProductList(){
    this.httpClient.get<any>(this.baseUrl).subscribe(
      response => {
        console.log(response);
        this.products = response;
      }
    );
 } */

 
/*   onSubmit(){
    //this.productsTest = this.getProductList();
  //this.products = this.getProductList();
  } */

 
   }
  


