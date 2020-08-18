import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,'product-1','product-1 description',100),
    new Product(2,'product-2','product-2 description',200),
    new Product(3,'product-3','product-3 description',300),
    new Product(4,'product-4','product-4 description',400),
    new Product(5,'product-5','product-5 description',500),
    new Product(6,'product-6','product-6 description',600),
    new Product(7,'product-7','product-6 description',600),
    new Product(8,'product-8','product-6 description',600),
  ]

  constructor() { }

  getProducts():Product[]{
    return this.products
  }
}
