import React from 'react'

import productSmall from '../../../assets/images/product-details/pro-details-small-img-1.png';
import productLarge from '../../../assets/images/product-details/pro-details-large-img-1.png';
import ProductDescription from './ProductDescription';

function ProductDetails() {


    return (

        <div className="product-details-area pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="product-details-img-wrap product-details-vertical-wrap"
                            
                        >
                            <div className="product-details-small-img-wrap">
                                <div className="swiper-container product-details-small-img-slider-1 pd-small-img-style">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="product-details-small-img">
                                                <img
                                                    src={productSmall}
                                                    alt="Product Thumnail"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd-prev pd-nav-style">
                                    {" "}
                                    <i className="ti-angle-up" />
                                </div>
                                <div className="pd-next pd-nav-style">
                                    {" "}
                                    <i className="ti-angle-down" />
                                </div>
                            </div>
                            <div className="swiper-container product-details-big-img-slider-1 pd-big-img-style">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="easyzoom-style">
                                            <div className="easyzoom easyzoom--overlay">
                                                <a href="assets/images/product-details/pro-details-zoom-img-1.png">
                                                    <img
                                                        src={productLarge}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <a
                                                className="easyzoom-pop-up img-popup"
                                                href="assets/images/product-details/pro-details-large-img-1.png"
                                            >
                                                <i className="pe-7s-search" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="product-details-content"
                           
                        >
                            <h2>New Modern Chair</h2>
                            <div className="product-details-price">
                                <span className="old-price">$25.89 </span>
                                <span className="new-price">$20.25</span>
                            </div>
                            <div className="product-details-review">
                                <div className="product-rating">
                                    <i className=" ti-star" />
                                    <i className=" ti-star" />
                                    <i className=" ti-star" />
                                    <i className=" ti-star" />
                                    <i className=" ti-star" />
                                </div>
                                <span>( 1 Customer Review )</span>
                            </div>
                            <div className="product-color product-color-active product-details-color">
                                <span>Color :</span>
                                <ul>
                                    <li>
                                        <a title="Pink" className="pink" href="#">
                                            pink
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Yellow" className="active yellow" href="#">
                                            yellow
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Purple" className="purple" href="#">
                                            purple
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-details-action-wrap">
                                <div className="product-quality">
                                <div className="dec qtybutton">-</div>
                                    <input
                                        className="cart-plus-minus-box input-text qty text"
                                        name="qtybutton"
                                        defaultValue={1}
                                    />
                                <div className="inc qtybutton">+</div>
                                </div>
                                <div className="single-product-cart btn-hover">
                                    <a href="#">Add to cart</a>
                                </div>
                                <div className="single-product-wishlist">
                                    <a title="Wishlist" href="wishlist.html">
                                        <i className="pe-7s-like" />
                                    </a>
                                </div>
                                <div className="single-product-compare">
                                    <a title="Compare" href="#">
                                        <i className="pe-7s-shuffle" />
                                    </a>
                                </div>
                            </div>
                            <div className="product-details-meta">
                                <ul>
                                    <li>
                                        <span className="title">SKU:</span> Ch-256xl
                                    </li>
                                    <li>
                                        <span className="title">Category:</span>
                                        <ul>
                                            <li>
                                                <a href="#">Office</a>,
                                            </li>
                                            <li>
                                                <a href="#">Home</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="title">Tags:</span>
                                        <ul className="tag">
                                            <li>
                                                <a href="#">Furniture</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-icon-style-4">
                                <a href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-dribbble" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-pinterest-p" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails