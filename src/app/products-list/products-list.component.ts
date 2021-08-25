import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductService]
})
export class ProductsListComponent implements OnInit {
  products:Product[] = []; 

 

  constructor(private http: HttpClient, private router: Router, private productService: ProductService) { 
  }


  ngOnInit() {
    this.fetchPosts();

  }

  


  private baseUrl = 'http://localhost:8080/api/productService';  
  
   private fetchPosts() {  
  
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
        this.products = posts;
      });
  }


 
   }
  


