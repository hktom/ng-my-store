import { Injectable } from '@angular/core';

export interface ICategory {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: number[];
  quantity?: number;
  size: 'S' | 'M' | 'L' | 'XL';
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  categories: ICategory[] = [
    {
      id: 1,
      name: 'Accessories',
      description: 'Accessories for your outfit',
      imageUrl:
        'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      name: 'shoes',
      description: 'shoes for your outfit',
      imageUrl:
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      name: 'Clothes',
      description: 'Clothes for your outfit',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1676031940533-8f1ac6a07268?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  products: IProduct[] = [
    {
      id: 1,
      name: 'T-shirt',
      description: 'Comfortable cotton T-shirt',
      price: 19.99,
      imageUrl:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww',
      categories: [3],
      size: 'M',
    },
    {
      id: 2,
      name: 'Jeans',
      description: 'Classic blue jeans',
      price: 39.99,
      imageUrl:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D',
      categories: [3],
      size: 'L',
    },
    {
      id: 3,
      name: 'Sneakers',
      description: 'Comfortable sneakers',
      price: 59.99,
      imageUrl:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
      categories: [2],
      size: 'XL',
    },
    {
      id: 4,
      name: 'Boots',
      description: 'Comfortable boots',
      price: 190.99,
      imageUrl:
        'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHN8ZW58MHx8MHx8fDA%3D',
      categories: [2],
      size: 'XL',
    },
    {
      id: 5,
      name: 'Socks',
      description: 'Comfortable socks',
      price: 9.99,
      imageUrl:
        'https://images.unsplash.com/photo-1616531758364-731625b1f273?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29ja3N8ZW58MHx8MHx8fDA%3D',
      categories: [1],
      size: 'S',
    },
    {
      id: 6,
      name: 'Hat',
      description: 'Comfortable hat',
      price: 14.99,
      imageUrl:
        'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww',
      categories: [1],
      size: 'S',
    },
  ];
}
