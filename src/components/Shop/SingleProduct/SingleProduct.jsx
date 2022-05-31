import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { addItemToCartByQty } from '../../../redux/cart/cartAction';
import { selectCartItems } from '../../../redux/cart/cartSelector';
import { addToWishlist } from '../../../redux/wishlist/wishlistAction'
import { selectWishlist} from '../../../redux/wishlist/wishlistSelector';
import { useDispatch, useSelector } from 'react-redux';

function SingleProduct() {
    const dispatch = useDispatch(); 
    const { id } = useParams(); 
    const cartItems = useSelector(selectCartItems);
    const wishlistItems = useSelector(selectWishlist);
    const product = useSelector(state => state.products.products.find(product => product.id == id))
    const [qty , setQty] = useState(1);

    // const Productimages = images.images;
    // const [currentImage, setCurrentImage] = useState(0);

    const price = product.price / 100 * product?.sale;
    const reduced_price = product.price - price;

    const AddProductToCartByQty = () => {
        dispatch(addItemToCartByQty(cartItems, product, qty));
        toast.success('Product added to cart')
    }

    const AddToWishlist = () => {
        dispatch(addToWishlist(wishlistItems , product))
        toast.success('Product added to wishlist')
    }

    const incrementHandle = () => {
        setQty(qty => qty + 1)
    }

    const decrementHandle = () => {
        if(qty > 1) {
            setQty(qty => qty - 1)
        }
    }



    return (

        <div className="product-details-area pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-details-img-wrap product-details-vertical-wrap">
                            <div className="product-details-small-img-wrap">
                                <div className="swiper-container product-details-small-img-slider-1 pd-small-img-style">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            {
                                                // Productimages.map((img, index) => {
                                                //     return <div key={index} className="product-details-small-img">
                                                //         <img
                                                //             src={img}
                                                //             style={{ opacity: `${index === currentImage ? '1' : '.5'}` }}
                                                //             alt="Product Thumnail"
                                                //             onClick={() => setCurrentImage(index)}
                                                //         />
                                                //     </div>
                                                // })
                                                <div className="product-details-small-img">
                                                    <img
                                                        src={product.imageUrl}
                                                        style={{opacity : 1}}
                                                        // style={{ opacity: `${index === currentImage ? '1' : '.5'}` }}
                                                        alt="Product Thumnail"
                                                        // onClick={() => setCurrentImage(index)}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="pd-prev pd-nav-style">
                                    <i className="ti-angle-up" />
                                </div>
                                <div className="pd-next pd-nav-style">
                                    <i className="ti-angle-down" />
                                </div>
                            </div>
                            <div className="swiper-container product-details-big-img-slider-1 pd-big-img-style">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="easyzoom-style">
                                            <div className="easyzoom easyzoom--overlay">
                                                <img src={product.imageUrl} alt="" />
                                            </div>
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
                            <h2>{product.name}</h2>
                            <div className="product-details-price">
                                {
                                    product.sale ?
                                    <>
                                        <span className="old-price">${product.price} </span>
                                        <span className="new-price">${reduced_price}</span>
                                    </> : <span className="new-price">${product.price} </span>
                                    
                                }
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
                                    <div className="dec qtybutton" onClick={decrementHandle}>-</div>
                                    <input
                                        className="cart-plus-minus-box input-text qty text"
                                        name="qtybutton"
                                        placeholder={qty}
                                    />
                                    <div className="inc qtybutton" onClick={incrementHandle}>+</div>
                                </div>
                                <div className="single-product-cart btn-hover" onClick={AddProductToCartByQty}>
                                    <a>Add to cart</a>
                                </div>
                                <div className="single-product-wishlist">
                                    <a title="Wishlist" onClick={AddToWishlist}>
                                        <i className="pe-7s-like" />
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
                                                <a href="#"> {product.category}</a>
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

export default SingleProduct;