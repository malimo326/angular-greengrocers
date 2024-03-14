import { Injectable } from '@angular/core';
import { Item } from './models/item';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Item[] = [];
  totalCost: number = 0.0;

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item) {
    let itemExists = false;
    this.items = this.items.map((i) => 
      {
        if(i.id=== item.id) 
          itemExists = true;
        return (i.id === item.id)? {...i, quantity: i.quantity+1} : i;
      }
    )
    if(!itemExists) 
      this.items.push({...item, quantity: 1})

    this.totalCost += item.price
  }

  increaseQuantity(item: Item) {
    this.items = this.items.map((i) => 
         (i.id === item.id)? {...i, quantity: i.quantity+1} : i
    )

    this.totalCost += item.price
  }

  decreaseQuantity(item: Item) {
    if(item.quantity === 1) {
      this.items = this.items.filter((i) => i.id !== item.id)
    } else {
      this.items = this.items.map((i) => 
       (i.id === item.id)? {...i, quantity: i.quantity-1} : i
      )
    }

    this.totalCost -= item.price
  }


}