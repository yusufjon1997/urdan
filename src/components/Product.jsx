import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cart/cartAction';
import { selectCartItems } from '../redux/cart/cartSelector';
import { selectDisplayList} from '../redux/products/productsSelector';
import { addToWishlist } from '../redux/wishlist/wishlistAction';
import { selectWishlist } from '../redux/wishlist/wishlistSelector';
import ModalProduct from './ModalProduct';


function Product({ product }) {

    // determining liststyle or grid
    const isDisplayList = useSelector(selectDisplayList);
    const [isModalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const wishlistItems = useSelector(selectWishlist);

    const price = product.price / 100 * product.sale;
    const reduced_price = product.price - price;


    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
        toast.success("Product added to cart")
    } 

    const openModal = ()=> {
        setModalOpen(true);
    }   

    const AddtoWishlist = () => {
        toast.success("Product added to wishlist")
        dispatch(addToWishlist(wishlistItems , product))

    }

    return (
        <>
            {
                isDisplayList ?

                    <div className="shop-list-wrap mb-30">
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                                <div className="product-list-img">
                                    <Link to={`/shop/${product.id}`}>
                                        <img
                                            src={product.imageUrl}
                                            alt="Product Style"
                                        />
                                    </Link>
                                    <div className="product-list-badge badge-right badge-pink">
                                        {
                                            product.sale ? <span>{`${product.sale}%`}</span> : <span></span>
                                        }
                                    </div>
                                    <div className="product-list-quickview">
                                        <button
                                            className="product-action-btn-2"
                                            title="Quick View"
                                            onClick={openModal}
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
                                    <p>{product.category}</p>
                                    <div className="product-price">
                                    {
                                        product.sale ?
                                        <>
                                            <span className="old-price">${product.price} </span>
                                            <span className="new-price">${reduced_price}</span>
                                        </> : <span className="new-price">${product.price} </span>
                                        
                                    }
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
                        <ModalProduct isModalOpen={isModalOpen} setModalOpen={setModalOpen} productId={product.id} />
                    </div>
                    :
                    <div className="product-wrap mb-35" >
                        <div className="product-img img-zoom mb-25">
                            <Link to={`/shop/${product.id}`}>
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
                                    onClick={AddtoWishlist}
                                >
                                    <i className="pe-7s-like" />
                                </button>
                                <button
                                    className="product-action-btn-1"
                                    title="Quick View"
                                    onClick={openModal}
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
                            <p>{product.category}</p>
                            <div className="product-price">
                            {
                                product.sale ?
                                <>
                                    <span className="old-price">${product.price} </span>
                                    <span className="new-price">${reduced_price}</span>
                                </> : <span className="new-price">${product.price} </span>
                                
                            }
                            </div>
                        </div>
                        <ModalProduct isModalOpen={isModalOpen} setModalOpen={setModalOpen} productId={product.id} />
                    </div>
            }
        </>
    )
}

export default Product