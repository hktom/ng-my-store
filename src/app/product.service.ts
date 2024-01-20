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
  subTotal?: number;
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
      description:
        'Our T-shirt features a classic crew neckline and short sleeves, making it a versatile wardrobe essential that transitions seamlessly from day to night. The soft and breathable fabric ensures a comfortable fit, perfect for both lounging at home and stepping out in style.',
      price: 19.99,
      imageUrl:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww',
      categories: [3],
      size: 'M',
    },
    {
      id: 2,
      name: 'Jeans',
      description:
        'Made from premium denim fabric, these jeans offer a comfortable fit and a durable construction that stands the test of time. The classic blue hue adds versatility to your wardrobe, allowing you to seamlessly integrate them into various looks. The tailored design features a modern cut that strikes the right balance between a relaxed feel and a stylish silhouette. The jeans sit comfortably at the waist and taper down the legs, offering a flattering and timeless look for both men and women.',
      price: 39.99,
      imageUrl:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D',
      categories: [3],
      size: 'L',
    },
    {
      id: 3,
      name: 'Sneakers',
      description:
        'Crafted with the urban explorer in mind, these sneakers combine functionality with fashion. The breathable mesh upper ensures all-day comfort, while the reinforced synthetic overlays provide support and stability for every step of your journey.',
      price: 59.99,
      imageUrl:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
      categories: [2],
      size: 'XL',
    },
    {
      id: 4,
      name: 'Boots',
      description:
        'The versatile color palette seamlessly integrates with both casual and semi-formal attire. Pair them with jeans for a laid-back urban look or team them up with chinos for a smart-casual ensemble. The Rugged Explorer Boots effortlessly transition from work to weekend, making them a wardrobe essential.',
      price: 190.99,
      imageUrl:
        'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHN8ZW58MHx8MHx8fDA%3D',
      categories: [2],
      size: 'XL',
    },
    {
      id: 5,
      name: 'Socks',
      description:
        "These everyday socks are not just about comfort; they also bring a touch of personality to your wardrobe. Available in a variety of colors and patterns, our socks add a subtle yet stylish accent to your outfit. Whether you prefer classic solids or playful prints, there's a pair for every mood and occasion.",
      price: 9.99,
      imageUrl:
        'https://images.unsplash.com/photo-1616531758364-731625b1f273?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29ja3N8ZW58MHx8MHx8fDA%3D',
      categories: [1],
      size: 'S',
    },
    {
      id: 6,
      name: 'Hat',
      description:
        'Introducing our Urban Chic Fedora Hat – a timeless accessory that effortlessly combines sophistication with contemporary flair. Elevate your style game and make a statement with this versatile and on-trend hat designed to complement any look.',
      price: 14.99,
      imageUrl:
        'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF0fGVufDB8fDB8fHww',
      categories: [1],
      size: 'S',
    },
  ];

  getProductsByCategory(categoryId: number) {
    if (categoryId === 0) return this.products;
    return this.products.filter((product) =>
      product.categories.includes(categoryId)
    );
  }

  getProductById(productId: number) {
    return this.products.find((product) => product.id === productId);
  }
}
