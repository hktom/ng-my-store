import { Injectable } from '@angular/core';
import { IProduct, ProductService } from './product.service';

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
  constructor(private products: ProductService) {}

  items: IProduct[] = [];

  private checkIfProductExists(productId: number): IProduct | boolean {
    let product = this.products.products.find(
      (product) => product.id === productId
    );
    if (!product) {
      return false;
    }
    return product;
  }

  private checkIfItemExists(productId: number): boolean {
    return this.items.some((item) => item.id === productId);
  }

  private addNewItem(product: IProduct) {
    this.items.push({ ...product, quantity: 1 });
  }

  private updateItemQuantity(product: IProduct, quantity: number) {
    this.items = this.items.filter((item) => item.id !== product.id);
    this.items.push({ ...product, quantity });
  }

  addProduct(productId: number, quantity: number = 1) {
    let product = this.checkIfProductExists(productId);
    if (!product) {
      return;
    }

    if (this.checkIfItemExists(productId)) {
      this.updateItemQuantity(product as IProduct, quantity);
      return;
    }
    this.addNewItem(product as IProduct);
  }

  removeProduct(productId: number) {
    let product = this.checkIfProductExists(productId);
    if (!product) {
      return;
    }
    this.items = this.items.filter((item) => item.id !== productId);
  }

  addDiscount(discount: number) {}

  resetCart() {
    this.items = [];
  }

  checkout() {
    this.resetCart();
  }
}
