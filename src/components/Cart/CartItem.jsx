import React from 'react'
import { useDispatch , useSelector} from 'react-redux';

import { addItemToCart , removeItemfromCart , clearItemFromCart} from '../../redux/cart/cartAction';
import { selectCartItems } from '../../redux/cart/cartSelector';

function CartItem({ item }) {

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();


    const increment = () => {
        dispatch(addItemToCart(cartItems , item));
    }

    const decrement = () => {
        dispatch(removeItemfromCart(cartItems, item))
    }

    const removeItem  = () => {
        dispatch(clearItemFromCart(cartItems , item));
    }
 
    return (
        <tr>
            <td className="product-thumbnail">
                <a href="product-details.html">
                    <img src={item.imageUrl} alt="" />
                </a>
            </td>
            <td className="product-name">
                <h5>
                    <a href="product-details.html">{item.name}</a>
                </h5>
            </td>
            <td className="product-cart-price">
                <span className="amount">{item.price}$</span>
            </td>
            <td className="cart-quality">
                <div className="product-quality">
                    <div class="dec qtybutton" onClick={decrement}>-</div>
                    <input
                        className="cart-plus-minus-box input-text qty text"
                        name="qtybutton"
                        placeholder={item.quantity}
                    />
                    <div class="inc qtybutton" onClick={increment} >+</div>
                </div>

            </td>
            <td className="product-total">
                <span>{item.price * item.quantity}$</span>
            </td>
            <td className="product-remove">
                <a href="#" onClick={removeItem} >
                    <i className=" ti-trash " />
                </a>
            </td>
        </tr>
    )
}

export default CartItem