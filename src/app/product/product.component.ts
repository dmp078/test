import { Component, Input, OnInit } from '@angular/core';

interface Product {
  title: string,
  img: string,
  price: string,
  count: number,
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() product: Product = {title: '', img: '', price: '', count: 0}

  ngOnInit(): void {
  }

}
