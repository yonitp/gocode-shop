import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { PRODUCTS } from '../mock-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product = PRODUCTS; 
  title = "My Products"
  constructor() { }

  ngOnInit(): void {
  }

}
