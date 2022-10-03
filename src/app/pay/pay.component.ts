import { Component, OnInit } from '@angular/core';

interface Cart {
  title: string
}

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor() { }

  listCart: Array<Cart> = [{title: 'Cart 1'}, {title: 'Cart 2'}];
  ngOnInit(): void {
  }

}
