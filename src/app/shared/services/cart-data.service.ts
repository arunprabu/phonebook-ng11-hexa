import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // let's have default cart items
  private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // create observable with the default cart item
  // 1. Create BehaviourSubject with default cart item
  private cartItemsList = new BehaviorSubject(this.currentCartItems);

  // 2. Make it as observable so that any comp can subscribe to it.
  latestCartItemsList: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() {
  }

  updateCart( pdt: any ): void {
    console.log(pdt);
    // add the pdt to the cartItemsList.
    this.latestCartItemsList.pipe( take(1)).subscribe( val => {
      console.log(val);
      console.log(...val);
      const newCartItemsArr = [ ...val, pdt];
      this.cartItemsList.next(newCartItemsArr);
    });
  }
}
