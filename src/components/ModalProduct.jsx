import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { selectCartItems } from '../redux/cart/cartSelector';
import { addItemToCartByQty} from '../redux/cart/cartAction'
import { selectWishlist } from '../redux/wishlist/wishlistSelector';
import { addToWishlist } from '../redux/wishlist/wishlistAction';
import { useSelector , useDispatch} from 'react-redux';

function ModalProduct({ isModalOpen, setModalOpen, productId }) {

    const dispatch = useDispatch();
    const product = useSelector(state => state.products.products.find(product => product.id == productId))
    const cartItems = useSelector(selectCartItems);
    const wishlistItems = useSelector(selectWishlist);
    const [qty , setQty] = useState(1);


    const closeModal = () => {
        setModalOpen(false);
    }


    const price = product.price / 100 * product?.sale;
    const reduced_price = product.price - price;



    const AddProductToCartByQty = () => {
        dispatch(addItemToCartByQty(cartItems, product, qty));
        toast.success("Product added to cart")
    }

    const AddToWishlist = () => {
        toast.success("Product added to wishlist")
        dispatch(addToWishlist(wishlistItems , product));
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
        <>
            {
                product &&
                <div className="modal fade quickview-modal-style show"
                    id="exampleModal"
                    style={{ display: `${isModalOpen ? 'block' : 'none'}` }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <a
                                    className="close"
                                    onClick={closeModal}
                                >
                                    <i className=" ti-close " />
                                </a>
                            </div>
                            <div className="modal-body">
                                <div className="row gx-0">
                                    <div className="col-lg-5 col-md-5 col-12">
                                        <div className="modal-img-wrap">
                                            <img src={product.imageUrl} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-12">
                                        <div className="product-details-content quickview-content">
                                            <h2>{product.name}</h2>
                                            {/* <h5 className='pt-3'>{product.category}</h5> */}
                                            <div className="product-details-price">
                                                {
                                                    product?.sale ?
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
                                            <div className="product-details-meta">
                                                <ul>
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
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                ornare tincidunt neque vel semper. Cras placerat enim sed nisl
                                                mattis eleifend.
                                            </p>
                                            <div className="product-details-action-wrap">
                                                <div className="product-quality">
                                                    <div className="dec qtybutton" onClick={decrementHandle} >-</div>
                                                    <input
                                                        className="cart-plus-minus-box input-text qty text"
                                                        name="qtybutton"
                                                        // value={qty}
                                                        placeholder={qty}
                                                    />
                                                    <div className="inc qtybutton" onClick={incrementHandle} >+</div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

ModalProduct.defaultProps = {
    productId: 3
}

export default ModalProduct;