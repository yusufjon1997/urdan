import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { selectTotalPrice} from '../../redux/cart/cartSelector';

function Shipping() {

    const totalPrice = useSelector(selectTotalPrice);


    return (
        <div className="grand-total-wrap">
            <div className="grand-total-content">
                <div className="grand-total">
                    <h4>
                        Total <span>{totalPrice}$</span>
                    </h4>
                </div>
            </div>
            <div className="grand-total-btn btn-hover">
                <Link className="btn theme-color" to="/checkout">
                    Proceed to checkout
                </Link>
            </div>
        </div>
    )
}

export default Shipping