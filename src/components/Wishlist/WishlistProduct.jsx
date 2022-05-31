import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../../redux/wishlist/wishlistAction';
import { addItemToCart} from '../../redux/cart/cartAction';
import { selectCartItems} from '../../redux/cart/cartSelector';

function WishlistProduct({ product}) {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    }
    return (
        <tr>
            <td className="product-remove">
                <a onClick={()=> dispatch(removeWishlist(product.id))} >×</a>
            </td>
            <td className="product-thumbnail">
                <a href="product-details.html">
                    <img src={product.imageUrl} alt="" />
                </a>
            </td>
            <td className="product-name">
                <h5>
                    <a href="product-details.html">{product.name}</a>
                </h5>
            </td>
            <td className="product-wishlist-price">
                <span className="amount">{product.price}$</span>
            </td>
            <td className="stock-status">
                <span>
                    <i className="las la-check" /> In Stock
                </span>
            </td>
            <td className="wishlist-cart btn-hover">
                <a onClick={addProductToCart}>Add to Cart</a>
            </td>
        </tr>
    )
}

export default WishlistProduct