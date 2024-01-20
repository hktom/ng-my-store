import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  product: IProduct | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private routeActive: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeActive.data.subscribe(({ product }) => {
      this.product = product;
    });
  }

  addProductToCart(productId: number, quantity: number): void {
    this.cartService.addProduct(productId, quantity);
  }
}
