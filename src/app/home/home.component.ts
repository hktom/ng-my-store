import { Component } from '@angular/core';
import { ICategory, ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: ICategory[] = [];

  constructor(private product: ProductService) {
    this.categories = product.categories;
  }
}
