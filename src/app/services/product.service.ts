import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,'product-1','product-1 Short description','product-1 Long description',100),
    new Product(2,'product-2','product-2 Short description','product-2 Long description',200),
    new Product(3,'product-3','product-3 Short description','product-3 Long description',300),
    new Product(4,'product-4','product-4 Short description','product-4 Long description',400),
    new Product(5,'product-5','product-5 Short description','product-5 Long description',500),
    new Product(6,'product-6','product-6 Short description','product-6 Long description',600),
    new Product(7,'product-7','product-6 Short description','product-7 Long description',600),
    new Product(8,'product-8','product-6 Short description','product-8 Long description',600),
  ]

  constructor(private http:HttpClient) { }

  addProduct(userId,srDetail,token):Observable<Product[]>{
    return this.http.post<Product[]>(`${environment.apiUrl}/addProduct/${userId}`,srDetail,{
      headers:{authorization:token}
    });
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/productList`,{
      headers:{authorization:localStorage.getItem('authToken')}
    })
  }
}
