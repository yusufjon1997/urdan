import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import cartImg from '../../assets/images/cart/cart-1.jpg';
import CouponCode from './CouponCode';
import Shipping from './Shipping';
import { selectCartItems} from '../../redux/cart/cartSelector';
import CartItem from './CartItem';

function CartItems() {

    const cartItems = useSelector(selectCartItems);

    return (
        <div className="cart-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="cart-table-content">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="width-thumbnail" />
                                                <th className="width-name">Product</th>
                                                <th className="width-price"> Price</th>
                                                <th className="width-quantity">Quantity</th>
                                                <th className="width-subtotal">Subtotal</th>
                                                <th className="width-remove" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map( cartItem => {
                                                    return <CartItem key={cartItem.id} item={cartItem} />
                                                })
                                            }

                                            {/* <tr>
                                                <td className="product-thumbnail">
                                                    <a href="product-details.html">
                                                        <img src={cartImg} alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <h5>
                                                        <a href="product-details.html">Stylish Swing Chair</a>
                                                    </h5>
                                                </td>
                                                <td className="product-cart-price">
                                                    <span className="amount">$120.00</span>
                                                </td>
                                                <td className="cart-quality">
                                                    <div className="product-quality">
                                                        <input
                                                            className="cart-plus-minus-box input-text qty text"
                                                            name="qtybutton"
                                                            defaultValue={1}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="product-total">
                                                    <span>$120.00</span>
                                                </td>
                                                <td className="product-remove">
                                                    <a href="#">
                                                        <i className=" ti-trash " />
                                                    </a>
                                                </td>
                                            </tr> */}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cart-shiping-update-wrapper">
                                        <div className="cart-shiping-update btn-hover">
                                            <a href="#">Continue Shopping</a>
                                        </div>
                                        <div className="cart-clear-wrap">
                                            <div className="cart-clear btn-hover">
                                                <a href="#">Clear Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <CouponCode />
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 offset-lg-4 offset-md-4">
                        <Shipping />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItems