import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  @Input() cartItem : any

  constructor() { }

  ngOnInit(): void {
    //console.log(this.cartItem)
  }

}
