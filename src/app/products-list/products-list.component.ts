import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductService]
})
export class ProductsListComponent implements OnInit {

private products: Product[] =[]; 
private productsTest: any = [];
//public pricePerItem: string = '';


  constructor(private http: HttpClient) { 
  }

  private baseUrl = 'http://localhost:8080/api/productService';  
  
  private getProductList() {  
    this.http.get<any>(this.baseUrl).subscribe(response => {
      //console.log(response);
      this.productsTest = response;
      //console.log(this.productsTest[1].pricePerItem);
      return response;
    });  
  }   

  // getProductList(){
  //   this.httpClient.get<any>(this.baseUrl).subscribe(
  //     response => {
  //       console.log(response);
  //       this.products = response;
  //     }
  //   );
  // }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.productsTest = this.getProductList();
  //this.products = this.getProductList();
  }

 

  

}
