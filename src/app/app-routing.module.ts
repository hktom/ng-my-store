import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { authGuardGuard } from './auth-guard.guard';
import { productResolver, productsResolver } from './product.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: { product: productResolver },
  },
  {
    path: 'store',
    component: StoreComponent,
    children: [
      {
        path: '',
        component: CategoriesComponent,
        resolve: { products: productResolver },
      },
      {
        path: ':category/:id',
        component: CategoriesComponent,
        resolve: { products: productsResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
