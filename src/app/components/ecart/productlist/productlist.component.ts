import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList;

  constructor(private productService:ProductService) { }

  ngOnInit(): void{
    // this.productService.getProducts().subscribe(product=>{
    //   this.productList = product;
    // })

    this.productList = this.productService.getProducts()
  }

}
