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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '/about',
    component: AboutComponent,
  },
  {
    path: '/store',
    component: StoreComponent,
    children: [
      {
        path: '/categories',
        component: CategoriesComponent,
        children: [
          { path: 'shoes', component: ProductComponent },
          { path: 'clothes', component: ProductComponent },
          { path: 'accessories', component: ProductComponent },
        ],
      },
      {
        path: '/cart',
        component: CartComponent,
      },
      {
        path: '/products',
        component: ProductComponent,
        children: [
          { path: 'shoes', component: ProductComponent },
          { path: 'clothes', component: ProductComponent },
          { path: 'accessories', component: ProductComponent },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: LoginComponent,
  },
  {
    path: '/account',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
