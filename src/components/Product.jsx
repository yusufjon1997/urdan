import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cart/cartAction';
import { selectCartItems } from '../redux/cart/cartSelector';
import { selectDisplayList } from '../redux/products/productSelector;

function Product({ product }) {

    // determining liststyle or grid
    const isDisplayList = useSelector(selectDisplayList);


    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const price = product.price / 100 * product.sale;
    const reduced_price = product.price - price;


    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));


    return (
        <>
            {
                isDisplayList ?

                    <div className="shop-list-wrap mb-30">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                                <div className="product-list-img">
                                    <a href="product-details.html">
                                        <img
                                            src={product.imageUrl}
                                            alt="Product Style"
                                        />
                                    </a>
                                    <div className="product-list-badge badge-right badge-pink">
                                        {
                                            product.sale ? <span>{`${product.sale}%`}</span> : <span></span>
                                        }
                                    </div>
                                    <div className="product-list-quickview">
                                        <button
                                            className="product-action-btn-2"
                                            title="Quick View"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            <i className="pe-7s-look" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                                <div className="shop-list-content">
                                    <h3>
                                        <a href="product-details.html">
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="product-price">
                                        {
                                            product.sale && <span className="old-price">${reduced_price} </span>
                                        }
                                        <span className="new-price">${product.price} </span>
                                    </div>
                                    <div className="product-list-rating">
                                        <i className=" ti-star" />
                                        <i className=" ti-star" />
                                        <i className=" ti-star" />
                                        <i className=" ti-star" />
                                        <i className=" ti-star" />
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipic it, sed
                                        do eiusmod tempor labor incididunt ut et dolore magna
                                        aliqua.
                                    </p>
                                    <div className="product-list-action">
                                        <button
                                            className="product-action-btn-3"
                                            title="Add to cart"
                                            onClick={addProductToCart}
                                        >
                                            <i className="pe-7s-cart" />
                                        </button>
                                        <button
                                            className="product-action-btn-3"
                                            title="Wishlist"
                                        >
                                            <i className="pe-7s-like" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="product-wrap mb-35" >
                        <div className="product-img img-zoom mb-25">
                            <Link to="/product">
                                <img src={product.imageUrl} alt="" />
                            </Link>
                            <div className="product-badge badge-top badge-right badge-pink">
                                {
                                    product.sale ? <span>{`${product.sale}%`}</span> : <span></span>
                                }
                            </div>
                            <div className="product-action-wrap">
                                <button
                                    className="product-action-btn-1"
                                    title="Wishlist"
                                >
                                    <i className="pe-7s-like" />
                                </button>
                                <button
                                    className="product-action-btn-1"
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="pe-7s-look" />
                                </button>
                            </div>
                            <div className="product-action-2-wrap">
                                <button
                                    className="product-action-btn-2"
                                    title="Add To Cart"
                                    onClick={addProductToCart}
                                >
                                    <i className="pe-7s-cart" /> Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="product-content">
                            <h3>
                                <Link to="/product">
                                    {product.name}
                                </Link>
                            </h3>
                            <div className="product-price">
                                {
                                    product.sale && <span className="old-price">${reduced_price} </span>
                                }
                                <span className="new-price">${product.price} </span>
                            </div>
                        </div>
                    </div>


            }
        </>
    )
}

export default Product