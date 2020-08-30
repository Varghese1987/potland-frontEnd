import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Product>();
  loading=true;
  subscriptions = [];
  displayedColumns=['imgUrl','name','price','action'];
  // productList;
  products:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    // this.productList = this.productService.getProducts()
    // console.log(this.productList)
    this.subscriptions.push(this.productService.getProducts()
    .subscribe(products=>this.onDataLoad(products)))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(){
    // this.subscriptions.forEach(item=>item.unsbscribe())
  }

  onDataLoad(products){
    this.loading= false;
    this.dataSource.data = products;
  }
  addToCart(product){
    console.log(product)
  }
}
