import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Tenis } from '../../models/tenis';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor (public cartServices:CartService, public productService:ProductService) {}

  addToCart(tenis:Tenis):void{
    this.cartServices.addedProduct(tenis)
  }
}
