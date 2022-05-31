import { wishlistTypes } from "./wishListTypes";

export const initialState = {
    wishlistItems : []
}


export const wishlistReducer = (state = initialState, action ) => {

    const {type , payload} = action;

    switch (type) {
        case wishlistTypes.addToWishlist :
            return {...state , wishlistItems : payload }
        case wishlistTypes.removeWishlist :
            return {...state , wishlistItems : state.wishlistItems.filter(wishlist => wishlist.id !== payload)}
        default : 
            return state;
    }
    
}