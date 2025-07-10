import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Tenis } from '../../models/tenis';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

    constructor (public cartService:CartService, public productService:ProductService) {}

      eraseProduct(tenis:Tenis):void{
        this.cartService.eliminarProducto(tenis)
      } 
    

    


}
