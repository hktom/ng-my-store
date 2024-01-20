import { Component, Input } from '@angular/core';
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
    const categoryId = +this.routeActive.snapshot.params['id'];
    this.products = this.product.products.filter((product) =>
      product.categories.includes(categoryId)
    );
    this.routeActive.params.subscribe((params) => {
      const categoryId = +params['id'];
      this.products = this.product.products.filter((product) =>
        product.categories.includes(categoryId)
      );
    });
  }

  goToProduct(product: IProduct) {
    this.router.navigate(['product', product.id]);
  }
}
