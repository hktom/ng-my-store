import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

interface ITotalService {
  addDiscount: (discount: number) => void;
  getTotal: () => number;
}

@Injectable({
  providedIn: 'root',
})
export class TotalService implements ITotalService {
  total: number = 0;

  constructor(private cartService: CartService) {}

  addDiscount(discount: number) {
    this.total = this.total - discount;
  }

  getTotal() {
    this.total = 0;
    this.cartService.items.forEach((item) => {
      this.total += item.price * (item.quantity || 1);
    });
    return this.total;
  }
}
