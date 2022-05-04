import React from 'react'
import logo from '../../assets/images/logo/logo.png';


function Header() {
    return (
        <header className="header-area header-responsive-padding header-height-1">
            <div className="header-bottom sticky-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block d-flex justify-content-center">
                            <div className="main-menu text-center">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="index.html">HOME</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">SHOP</a>
                                        </li>
                                        <li>
                                            <a href="about-us.html">ABOUT</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">CONTACT US</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="header-action-wrap">
                                <div className="header-action-style header-search-1">
                                    <a className="search-toggle" href="#">
                                        <i className="pe-7s-search s-open" />
                                        <i className="pe-7s-close s-close" />
                                    </a>
                                    <div className="search-wrap-1">
                                        <form action="#">
                                            <input placeholder="Search products…" type="text" />
                                            <button className="button-search">
                                                <i className="pe-7s-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="header-action-style">
                                    <a title="Login Register" href="login-register.html">
                                        <i className="pe-7s-user" />
                                    </a>
                                </div>
                                <div className="header-action-style">
                                    <a title="Wishlist" href="wishlist.html">
                                        <i className="pe-7s-like" />
                                    </a>
                                </div>
                                <div className="header-action-style header-action-cart">
                                    <a className="cart-active" href="#">
                                        <i className="pe-7s-shopbag" />
                                        <span className="product-count bg-black">01</span>
                                    </a>
                                </div>
                                <div className="header-action-style d-block d-lg-none">
                                    <a className="mobile-menu-active-button" href="#">
                                        <i className="pe-7s-menu" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;