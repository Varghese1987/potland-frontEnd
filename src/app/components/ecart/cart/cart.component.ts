import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[]
  cartTotal=0

  constructor(private msgService :MessengerService) { }

  ngOnInit(){
    this.msgService.getMsg().subscribe((product:Product)=>{
      // console.log(product)
      this.addProductToCart(product)    
    })
  }

  
  addProductToCart(product){
    //console.log(product._id)
    let itemAvailable = false

    for(let i in this.cartItems){
      if(this.cartItems[i].productId===product._id){
        this.cartItems[i].qty++;
        itemAvailable=true;
        break;
      }
    }

    if(!itemAvailable){
      this.cartItems.push({
        productId:product._id,
        productName:product.name,
        qty:1,
        price:product.price
      })
    }
    
    this.cartTotal=0;
    this.cartItems.forEach(item=>{
      this.cartTotal+= (item.qty*item.price)
    })
  }

}
