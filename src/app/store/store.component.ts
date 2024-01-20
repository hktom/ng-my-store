import { Component } from '@angular/core';
import { ICategory, ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {
  categories: ICategory[] = [];

  constructor(
    private product: ProductService,
    private router: Router,
    private routeActive: ActivatedRoute
  ) {
    this.categories = [
      {
        name: 'All',
        id: 0,
        description: '',
        imageUrl: '',
      },
      ...product.categories,
    ];
  }

  goToCategory(category: ICategory) {
    this.router.navigate([category.name, category.id], {
      relativeTo: this.routeActive,
    });
  }
}
