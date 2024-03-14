import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input('cartItem') cartItem: Item | null = null;


  constructor(private readonly cartService: CartService) {}

  increaseQuantity(item: Item) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: Item) {
    this.cartService.decreaseQuantity(item);
  }
}