import { ResolveFn } from '@angular/router';
import { IProduct, ProductService } from './product.service';
import { inject } from '@angular/core';

export const productsResolver: ResolveFn<IProduct[]> = (route, state) => {
  return inject(ProductService).getProductsByCategory(+route.params['id'] || 0);
};

export const productResolver: ResolveFn<IProduct | undefined> = (
  route,
  state
) => {
  return inject(ProductService).getProductById(+route.params['id'] || 0);
};
