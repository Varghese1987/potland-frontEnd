import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  listData:MatTableDataSource<any>

  displayedColumns: string[]=["productID","productName","category","productPrice","actions"]

  @ViewChild (MatSort) sort:MatSort;
  @ViewChild (MatPaginator) paginator:MatPaginator;
  searchKey : string;

  constructor(
    private productService: ProductService,
    private dialogue : MatDialog
    ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      let array = data;
      this.listData = new MatTableDataSource(array);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }

  onSearchClr(){
    this.searchKey="";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter=this.searchKey.trim().toLowerCase();
  }

  add(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialogue.open(AddProductComponent,dialogConfig)
  }

}
