import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  

  @Input() productItem:Product

  constructor(private msgService : MessengerService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.msgService.sendMsg(this.productItem)
  }

  
}
