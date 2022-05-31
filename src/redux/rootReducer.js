import { combineReducers } from 'redux';

import { userReducer } from './user/userReducer';
import { cartReducer } from './cart/cartReducer';
import { productsReducer } from './products/productsReducer';
import { wishlistReducer } from './wishlist/wishlistReducer';

export const rootReducer = combineReducers({
    user : userReducer,
    products : productsReducer,
    cart : cartReducer,
    wishlist : wishlistReducer
});