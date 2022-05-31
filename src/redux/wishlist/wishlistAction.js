import { createAction } from '../../utilities/reducer/reducerUtils';
import { wishlistTypes } from './wishListTypes';


const createWishlistItems = (wishlistItems , product) => {
    const existingItem = wishlistItems.find(wishlist => wishlist.id === product.id);
    if(existingItem){
        return wishlistItems
    }
    return [...wishlistItems , product];
}


export const addToWishlist = (wishlistItems ,  product) => {
    const newWishlistItems  = createWishlistItems(wishlistItems , product)
    return createAction(wishlistTypes.addToWishlist , newWishlistItems)
}

export const removeWishlist = (productId) => {
  return createAction(wishlistTypes.removeWishlist , productId)
}

// export const repairList = (array) => {
//     console.log(array);
//     return createAction(wishlistTypes.addToWishlist , array);
// }