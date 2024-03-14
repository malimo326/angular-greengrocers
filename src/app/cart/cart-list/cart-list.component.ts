import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  constructor(private readonly cartService: CartService) {}

  getCartItems(): Item[] {
    return this.cartService.getItems();
  }

}