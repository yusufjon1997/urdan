import { map } from 'lodash';
import { createAction } from '../../utilities/reducer/reducerUtils';
import { CartActionTypes } from './cartActionTypes'



const addCartItem = (cartItems , product) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === product.id );
    // if existing item found increment quantity
    if(existingItem) {
      return cartItems.map(cartItem => cartItem.id === product.id ? 
            {...cartItem , quantity : cartItem.quantity + 1 } : 
                cartItem) 
    }
    return [...cartItems , {...product , quantity : 1}];
}

const removeCartItem = (cartItems , product) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
    /// decrement quantity
    if(existingItem.quantity > 1) {
      return  cartItems.map(cartItem => cartItem.id === product.id ? 
        {...cartItem , quantity : cartItem.quantity - 1} : cartItem)
    } else {
        return cartItems.filter(cartItem => cartItem.id !== product.id)
    }

}

const clearCartItem = (cartItems , product) => {
    return cartItems.filter(cartItem => cartItem.id !== product.id);
}

const addItemByQty = (cartItems , product , qty) => {

    const existingItem = cartItems.find(cartItem => cartItem.id === product.id);

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === product.id ? 
            {...cartItem , quantity : cartItem.quantity + qty } : 
                cartItem) 
    }

    return [...cartItems , {...product , quantity : qty}]
}


export const addItemToCart = (cartItems , product) => {
    const newCartItems = addCartItem(cartItems , product);
    return createAction(CartActionTypes.addItemToCart, newCartItems);
} 

export const removeItemfromCart = (cartItems , product) => {
    const newCartItems = removeCartItem(cartItems , product);

    return createAction(CartActionTypes.addItemToCart , newCartItems);
}

export const clearItemFromCart = (cartItems , product) => {
    const newCartItems = clearCartItem(cartItems , product);
    return createAction(CartActionTypes.addItemToCart , newCartItems);
}

export const addItemToCartByQty = (cartItems , product , qty ) => {
    const newCartItems = addItemByQty(cartItems, product , qty);
    return createAction(CartActionTypes.addItemToCart , newCartItems)
}