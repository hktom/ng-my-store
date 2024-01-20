import { Component } from '@angular/core';
import { ICategory, ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: ICategory[] = [];

  constructor(private product: ProductService, private route: Router) {
    this.categories = product.categories;
  }

  goToCategory(category: ICategory) {
    this.route.navigate(['/store', category.name, category.id]);
  }
}
