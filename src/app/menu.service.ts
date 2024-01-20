import { Injectable } from '@angular/core';

export interface IMenu {
  name: string;
  link: string;
  children?: IMenu[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menus: IMenu[] = [
    { name: 'Home', link: '' },
    {
      name: 'Products',
      link: '/products',
      children: [
        { name: 'Shoes', link: '/shoes' },
        { name: 'Clothes', link: '/clothes' },
        { name: 'Accessories', link: '/accessoires' },
      ],
    },
    { name: 'About', link: '/about' },
    { name: 'Cart', link: '/cart' },
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' },
  ];
}
