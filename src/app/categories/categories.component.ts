import { Component } from '@angular/core';
import { ICategory, IProduct, ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories: ICategory[] = [];
  products: IProduct[] = [];

  constructor(
    private product: ProductService,
    private router: Router,
    private routeActive: ActivatedRoute
  ) {
    this.categories = this.product.categories;
    this.products = this.product.products;
  }
}
