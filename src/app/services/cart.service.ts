import { Injectable } from '@angular/core';
import { Tenis } from '../models/tenis';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProduct:Tenis[]=[]

  cartItems:string[]= [];
  total:number=0;

  constructor() {

    let cartProduct = localStorage.getItem('cart')
    if(cartProduct){
    let products=JSON.parse(cartProduct)
    this.cartProduct=products
    }
   }

  addedProduct(tenis:Tenis){
    this.cartProduct.push(tenis);
    localStorage.setItem('cart', JSON.stringify(this.cartProduct))
  }

  onProductAdded(product:string):void{
    this.cartItems.push(product);
    let indice= this.cartProduct.findIndex((p)=> p.name === product);
    this.total = this.total + this.cartProduct[indice].price;
  }

  getTotal(){
    this.total=0
    for (const product of this.cartProduct) {
      this.total=this.total + product.price;
    }

    return this.total
  }


  eliminarProducto(product:Tenis):void{
    let indice = this.cartProduct.findIndex( (p) => p.sku === product.sku);
    this.cartProduct.splice(indice,1) /*nada mas elimina ese*/
    alert('El producto '+ product.name + ' ha sido eliminado');
    localStorage.setItem('cart', JSON.stringify(this.cartProduct))


}


  
}
