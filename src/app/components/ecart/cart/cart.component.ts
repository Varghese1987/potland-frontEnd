import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;
  returnMsg="";

  constructor(private msgService: MessengerService, private router : Router) { }

  ngOnInit() {
    this.msgService.getMsg().subscribe((product: Product) => {
      // console.log(product)
      this.addProductToCart(product)
    })
  }


  addProductToCart(product) {
    //console.log(product._id)
    let itemAvailable = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product._id) {
        this.cartItems[i].qty++;
        itemAvailable = true;
        break;
      }
    }

    if (!itemAvailable) {
      this.cartItems.push({
        productId: product._id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    if (this.cartItems !== null) {
      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)
        // this.returnMsg += "Product-Name:"+item.name+"; Qty:"+item.qty+"; ItemTotal:"
      })
    }
  }
  
  yourNumber = "+919884622748";

  getLinkWhastapp() {
    console.log(this.cartItems)
    if (this.cartItems !== null) {
      this.returnMsg="";
      this.cartItems.forEach(item => {
        this.returnMsg += "Product-Name:"+item.productName+"; Qty:"+item.qty+"; ItemTotal:"+item.qty*item.price
      })
      // console.log(this.returnMsg)
      var url = 'https://api.whatsapp.com/send?phone=' 
       + this.yourNumber 
       + '&text=' 
       + encodeURIComponent(this.returnMsg)
  
      this.router.navigate(['externalRedirect', { externalUrl: url }]);
      this.cartItems=[];
    }
    // return url
  }

}