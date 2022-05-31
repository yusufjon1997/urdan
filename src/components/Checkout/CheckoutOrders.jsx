import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems , selectTotalPrice } from '../../redux/cart/cartSelector';
import { v4 as id} from 'uuid'

function CheckoutOrders() {

    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className="your-order-area">
            <h3>Your order</h3>
            <div className="your-order-wrap gray-bg-4">
                <div className="your-order-info-wrap">
                    <div className="your-order-info">
                        <ul>
                            <li>
                                Product <span>Total</span>
                            </li>
                        </ul>
                    </div>
                    <div className="your-order-middle">
                        <ul>
                        {
                            cartItems.length > 0 ? 
                                cartItems.map(cartItem => {
                                    return <li key={id()}>
                                            {cartItem.name} X {cartItem.quantity}  <span> ${cartItem.quantity * cartItem.price} </span>
                                           </li>
                                }) :
                                <li>
                                    <h5>Cart is empty</h5>
                                </li>
                        }
                        </ul>
                    </div>
                    <div className="your-order-info order-total">
                        <ul>
                            <li>
                                Total <span>${ totalPrice}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="payment-method">
                    <div className="pay-top sin-payment">
                        <input
                            id="payment_method_1"
                            className="input-radio"
                            type="radio"
                            defaultValue="cheque"
                            defaultChecked="checked"
                            name="payment_method"
                        />
                        <label htmlFor="payment_method_1">
                            {" "}
                            Direct Bank Transfer{" "}
                        </label>
                        <div className="payment-box payment_method_bacs">
                            <p>
                                Make your payment directly into our bank account. Please
                                use your Order ID as the payment reference.
                            </p>
                        </div>
                    </div>
                    <div className="pay-top sin-payment">
                        <input
                            id="payment-method-2"
                            className="input-radio"
                            type="radio"
                            defaultValue="cheque"
                            name="payment_method"
                        />
                        <label htmlFor="payment-method-2">Check payments</label>
                        <div className="payment-box payment_method_bacs">
                            <p>
                                Make your payment directly into our bank account. Please
                                use your Order ID as the payment reference.
                            </p>
                        </div>
                    </div>
                    <div className="pay-top sin-payment">
                        <input
                            id="payment-method-3"
                            className="input-radio"
                            type="radio"
                            defaultValue="cheque"
                            name="payment_method"
                        />
                        <label htmlFor="payment-method-3">Cash on delivery </label>
                        <div className="payment-box payment_method_bacs">
                            <p>
                                Make your payment directly into our bank account. Please
                                use your Order ID as the payment reference.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <button className="Place-order btn-hover" form="checkout-form" type="submit" style={{ border:'none' , background:"none"}}>
                <a >Place Order</a>
            </button>
        </div>
    )
}

export default CheckoutOrders