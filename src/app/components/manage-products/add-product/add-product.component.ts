import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

interface Category {
  id:number,
  value: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;
  categories: Category[] = [
    {id:1, value: 'Plant'},
    {id:2, value: 'Pebbles'},
    {id:3, value: 'Ferlilizer'}
  ];
    constructor(private fb:FormBuilder, private router:Router, private productService:ProductService) {
      this.formGroup = this.fb.group({
        name:this.fb.control("",Validators.required),
        price:this.fb.control("",Validators.required),
        category:this.fb.control(0,Validators.required),
        shortDesc:this.fb.control("",Validators.required),
        longDesc:this.fb.control("",Validators.required),
        imgUrl:this.fb.control("",Validators.required),
      })
     }
    addProduct(){
        this.productService.addProduct(localStorage.getItem('userId'),this.formGroup.value,localStorage.getItem('authToken')).subscribe(response=>{
          this.router.navigate(["/manageProduct"]);
          this.formGroup.reset();
          this.clrFormGroupVal();
          
        })
    }

    clrFormGroupVal(){
      this.formGroup.setValue({
        name:"",
        price:"",
        category:0,
        shortDesc:"",
        longDesc:"",
        imgUrl:""
      })
    }

    clear(){
      this.formGroup.reset();
      this.clrFormGroupVal();

    }

  ngOnInit(): void {
  }

}
