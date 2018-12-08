import { BaseCartItem, CheckoutHttpSettings } from 'ng-shopping-cart';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { CollapseNavbarComponent } from '../components/collapse-navbar/collapse-navbar.component';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  innerWidth = window.innerWidth;

  @ViewChild(CollapseNavbarComponent) public navBarComponent: CollapseNavbarComponent;

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

  ngOnInit() {
    // collapse it by default 
    this.navBarComponent.sidebarCollapse();
    
    // this.onResize(new Event('resize'));
  }

  // @HostListener('window:resize', ['$event'])
  //   onResize(event) {
  //     this.innerWidth = window.innerWidth;
  //     console.log(this.innerWidth);
  //     if (this.innerWidth <= 1600) {
  //       if ($('#sidebar-container').hasClass('sidebar-expanded')) {
  //         this.navBarComponent.sidebarCollapse();
  //       }
  //     } else if (this.innerWidth > 1600) {
  //       if ($('#sidebar-container').hasClass('sidebar-collapsed')) {
  //         this.navBarComponent.sidebarCollapse();
  //       }
  //     }
  //   }

  public itemAdded(event) {
    console.log(event);
  }
}
