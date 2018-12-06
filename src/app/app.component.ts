import { BaseCartItem, CheckoutHttpSettings } from 'ng-shopping-cart';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  item = new BaseCartItem({
    id: 1,
    name: 'Item 1',
    price: 12.00,
    image: 'http://img1.tebyan.net/Big/1393/01/20717721532161874817621852134711820022565.jpg',
    quantity: 1
  });

  items = [new BaseCartItem({
    id: 1,
    name: 'Item 1',
    price: 12.00,
    image: 'http://img1.tebyan.net/Big/1393/01/20717721532161874817621852134711820022565.jpg',
    quantity: 1
  })];

  settings: CheckoutHttpSettings = {
    method: 'POST',
    url: 'http://myapi.com/',
    // options: { headers: { Authorization: 'Bearer my-auth-token' } }
  };

  public itemAdded(event) {
    console.log(event);
  }
}
