import { Injectable } from '@angular/core';
import { Store } from './store';
import { CartState, initialState } from './cart-state';
import { CartItem } from './cart-item';

@Injectable ({providedIn:'root'})
export class CartStore extends Store<CartState>{
    constructor(){
        super(initialState)
    }

    addCartItem(cartItemToAdd: import('./cart-item').CartItem){
        const newState = {
            ...this.state,//cartItems
            cartItems: [].concat(this.state.cartItems, cartItemToAdd)
        };
        this.setState(newState);
    }
    clearCart(){
        const newState = initialState;

        this.setState(newState)
    }
    restoreCart(stateToRestore : CartState){
        this.setState(stateToRestore)
    }
    removeCartItem(cartItemToRemove : import('./cart-item').CartItem){
        const newState = {
            ...this.state,
            cartItems:this.state.cartItems.filter(
                cartItem => cartItem.id !== cartItemToRemove.id
            )
        }
        this.setState(newState)
    }

    updateCartItem(itemToUpdate : CartItem){
        const newState = {
            ...this.state,
            cartItems:this.state.cartItems.map(
                cartItem => cartItem.id === itemToUpdate.id ? itemToUpdate : cartItem
            )
        }
        this.setState(newState)
    }
}
