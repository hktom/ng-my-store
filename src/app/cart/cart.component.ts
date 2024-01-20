import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { CartService } from '../cart.service';
import { IProduct } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  items: IProduct[] = [];
  constructor(
    private router: Router,
    private notification: NotificationService,
    private cartService: CartService
  ) {
    this.items = this.cartService.items;
  }

  goToItem(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  removeItem(productId: number) {
    this.cartService.removeProduct(productId);
    this.items = this.cartService.items;
  }
}
