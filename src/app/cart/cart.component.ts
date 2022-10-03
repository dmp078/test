import { Component, OnInit, Input } from '@angular/core';

interface Cart {
  title: string
}

interface Product {
  title: string,
  img: string,
  price: string,
  count: number,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  @Input() cart: Cart = {title: ""};
  listProduct: Array<Product> = [{title: "iPhone 14", img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en-iphone-14-pro.png", price: "10.000.000d", count: 1 }, {title: "iPhone 14", img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en-iphone-14-pro.png", price: "10.000.000d", count: 1 }, {title: "iPhone 14", img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en-iphone-14-pro.png", price: "10.000.000d", count: 2 }, {title: "iPhone 14", img: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/e/_en-iphone-14-pro.png", price: "10.000.000d", count: 3 }]
  ngOnInit(): void {
  }
}