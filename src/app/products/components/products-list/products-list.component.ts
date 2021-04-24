import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  productList: Array<any> = [{
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: '$2.76'
  }, {
    id: 2,
    name: 'Cheese',
    category: 'Dairy',
    price: '$6.38'
  }, {
    id: 3,
    name: 'Orange',
    category: 'Fruits',
    price: '$4.85'
  }];

  constructor( private cartDataService: CartDataService) { }

  ngOnInit(): void {
  }

  addToCartHandler( pdt: any ): void {
    console.log('will be implemented');
    console.log(pdt);

    this.cartDataService.updateCart(pdt);

  }
}
