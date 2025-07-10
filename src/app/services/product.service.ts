import { Injectable } from '@angular/core';
import { Tenis } from '../models/tenis';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Tenis[] = [
    {
      image:
        'https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Nike Air Force One',
      price: 2500,
      sku: 1,
    },

    {
      image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      name: 'Tenis Blancos con Morado',
      price: 2200,
      sku: 2,
    },

    {
      image:"/amarillos.jpg",
      name: 'Tenis Amarillos',
      price: 1800,
      sku: 3,
    },

    {
      image: "/azulynaranja.jpg",
      name: 'Tenis Azul con Naranja',
      price: 2900,
      sku: 4,
    },

    {
      image: "/beige.jpg",
      name: 'Tenis Beige',
      price: 3000,
      sku: 5,
    },

    {
      image: "/cafeconblanco.jpg",
      name: 'Tenis Café con Blanco',
      price: 3200,
      sku: 6,
    },

    {
      image: "/debotita.jpg",
      name: 'Tenis de Botita',
      price: 3600,
      sku: 7,
    },

    {
      image: "/gris.jpg",
      name: 'Tenis Gris',
      price: 2500,
      sku: 8,
    },

    {
      image: "/losdesteve.jpg",
      name: 'Tenis de Steve',
      price: 1500,
      sku: 9,
    },

    {
      image: "/negros.jpg",
      name: 'Tenis Negros',
      price: 2300,
      sku: 10,
    },

    {
      image: "/rosasconblanco.jpg",
      name: 'Tenis Rosa con Blanco',
      price: 2900,
      sku: 11,
    },

    {
      image: "/sambiña.jpg",
      name: 'Tenis Sambiña',
      price: 2300,
      sku: 12,
    }
  ];

  constructor() {}
}
