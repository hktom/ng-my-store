import { Injectable } from '@angular/core';
import { IProduct, ProductService } from './product.service';
import { NotificationService } from './notification.service';

interface ICartService {
  addProduct: (productId: number) => void;
  removeProduct: (productId: number) => void;
  addDiscount: (discount: number) => void;
  resetCart: () => void;
  checkout: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class CartService implements ICartService {
  constructor(
    private products: ProductService,
    private notificationService: NotificationService
  ) {
    this.getFromLocalStorage();
  }

  items: IProduct[] = [];

  private checkIfProductExists(productId: number): IProduct | boolean {
    let product = this.products.products.find(
      (product) => product.id === productId
    );
    if (!product) {
      this.notificationService.notificationStatusUpdated.emit({
        message: 'Product not found',
        category: 'alert-danger',
      });
      return false;
    }
    return product;
  }

  private checkIfItemExists(productId: number): boolean {
    return this.items.some((item) => item.id === productId);
  }

  private saveInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  private getFromLocalStorage() {
    let cart = localStorage.getItem('cart');
    if (cart) {
      this.items = JSON.parse(cart);
    }
  }

  private resetLocalStorage() {
    localStorage.removeItem('cart');
  }

  private addNewItem(product: IProduct, quantity: number) {
    this.items.push({
      ...product,
      quantity,
      subTotal: Math.round(product.price * quantity),
    });
  }

  private updateItemQuantity(product: IProduct, quantity: number) {
    this.items = this.items.filter((item) => item.id !== product.id);
    this.addNewItem(product, quantity);
  }

  addProduct(productId: number, quantity: number = 1) {
    let product = this.checkIfProductExists(productId);
    if (!product) {
      return;
    }

    if (this.checkIfItemExists(productId)) {
      this.updateItemQuantity(product as IProduct, quantity);
      this.notificationService.notificationStatusUpdated.emit({
        message: 'Product quantity updated',
        category: 'alert-success',
      });
    } else {
      this.addNewItem(product as IProduct, quantity);
      this.notificationService.notificationStatusUpdated.emit({
        message: 'Product added',
        category: 'alert-success',
      });
    }
    this.saveInLocalStorage();
  }

  removeProduct(productId: number) {
    let product = this.checkIfProductExists(productId);
    if (!product) {
      return;
    }
    this.items = this.items.filter((item) => item.id !== productId);
    this.notificationService.notificationStatusUpdated.emit({
      message: 'Product removed',
      category: 'alert-success',
    });
    this.saveInLocalStorage();
  }

  addDiscount(discount: number) {}

  resetCart() {
    this.items = [];
    this.resetLocalStorage();
  }

  checkout() {
    this.resetCart();
    this.notificationService.notificationStatusUpdated.emit({
      message: 'Your order has been placed, successfully',
      category: 'alert-success',
    });
  }
}
