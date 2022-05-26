import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelector';
// improt {} from '../../redux/cart/'
import { selectTotalCartItems} from '../../redux/cart/cartSelector';

function HeaderAction() {

    const [searchToggle, setSearchToggle] = useState(false);

    const toggleSearch = () => {
        setSearchToggle(!searchToggle)
    }

    // select user if it exist and change icon image

    const currentUser = useSelector(selectCurrentUser);
    const totalCartItems = useSelector(selectTotalCartItems);    



    return (
        <div className="header-action-wrap">
            <div className="header-action-style header-search-1">

                <a className={`search-toggle ${searchToggle && 'open'}`} onClick={toggleSearch}>
                    <i className="pe-7s-search s-open" />
                    <i className="pe-7s-close s-close" />
                </a>
                <div className={`search-wrap-1 ${searchToggle && 'open'}`}>
                    <form action="#">
                        <input placeholder="Search products…" type="text" />
                        <button className="button-search">
                            <i className="pe-7s-search" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="header-action-style">
                {
                    currentUser ?
                        <Link title="My account" to="/my-account">
                            <i className="pe-7s-user online" />
                        </Link>
                        :
                        <Link title="Login Register" to="/auth">
                            <i className="pe-7s-user" />
                        </Link>
                }
            </div>
            <div className="header-action-style">
                <Link title="Wishlist" to="/wishlist">
                    <i className="pe-7s-like" />
                </Link>
            </div>
            <div className="header-action-style header-action-cart">
                <Link className="cart-active" to="/cart">
                    <i className="pe-7s-shopbag" />
                    <span className="product-count bg-black">{totalCartItems}</span>
                </Link>
            </div>
            <div className="header-action-style d-block d-lg-none">
                <a className="mobile-menu-active-button" href="#">
                    <i className="pe-7s-menu" />
                </a>
            </div>
        </div>
    )
}

export default HeaderAction