import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTotalProducts } from '../../redux/products/productsSelector';
import product1 from '../../assets/images/product/product-1.png';
import { Link } from 'react-router-dom';



function HotDeals() {
    const [tab , setTab] = useState(1);

    const newProducts = useSelector(state => state.products.products.reverse().slice(0,4));
    const saleProducts = useSelector(state => state.products.products.filter(product => product.sale).slice(0,4))
    
    console.log(saleProducts);

    const toggleTab = (index) => {
        setTab(index);
    } 

    return (
        <div className="product-area pb-60">
            <div className="container">
                <div
                    className="section-title-tab-wrap mb-75"
        
                >
                    <div className="section-title-2">
                        <h2>Hot Products</h2>
                    </div>
                    <div className="tab-style-1 nav">
                        <a className={`${tab === 1 && 'active'}`} onClick={() => toggleTab(1)}>
                            New Arrivals{" "}
                        </a>
                        <a  className={`${tab === 2 && 'active'}`} onClick={() => toggleTab(2)}>
                            {" "}
                            Sale Items{" "}
                        </a>
                        <a  className={`${tab === 3 && 'active'}`} onClick={() => toggleTab(3)}>
                            {" "}
                            Best seller{" "}
                        </a>
                    </div>
                </div>
                <div className="tab-content jump">
                    <div id="pro-1" className={`tab-pane ${tab === 1 && 'active'}`}>
                        <div className="row">
                        {
                            newProducts && 
                            newProducts.map(product => {
                                return <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={product.id}>
                                <div className="product-wrap mb-35" >
                                    <div className="product-img img-zoom mb-25">
                                        <Link to={`/shop/${product.id}`}>
                                            <img src={product.imageUrl} alt="" />
                                        </Link>
                                        <div className="product-badge badge-top badge-right badge-pink">
                                            { product.sale && 
                                                <span>-{product.sale}%</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>
                                            <Link to={`/shop/${product.id}`} >{product.name}</Link>
                                        </h3>
                                        <div className="product-price">
                                        {   
                                            product.sale ?
                                        <>
                                            <span className="old-price">${product.price} </span>
                                            <span className="new-price">${ product.price - (product.price / 100 * product.sale)}</span>
                                        </> : <span className="new-price">${product.price} </span>
                                        
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })
                        }
                        </div>
                    </div>
                    <div id="pro-2" className={`tab-pane ${tab === 2 && 'active'}`}>
                        <div className="row">
                        {
                            saleProducts && 
                            saleProducts.map(product => {
                                return <div key={product.id}  className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product-wrap mb-35">
                                    <div className="product-img img-zoom mb-25">
                                        <Link to={`/shop/${product.id}`} >
                                            <img src={product.imageUrl} alt="" />
                                        </Link>
                                        <div className="product-badge badge-top badge-right badge-pink">
                                            {    product.sale && 
                                                <span>-{product.sale}%</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>
                                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                        </h3>
                                        <div className="product-price">
                                        {   
                                            product.sale ?
                                        <>
                                            <span className="old-price">${product.price} </span>
                                            <span className="new-price">${ product.price - (product.price / 100 * product.sale)}</span>
                                        </> : <span className="new-price">${product.price} </span>
                                        
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })
                        }
                        </div>
                    </div>
                    <div id="pro-3" className={`tab-pane ${tab === 3 && 'active'}`}>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="product-wrap mb-35">
                                    <div className="product-img img-zoom mb-25">
                                        <a href="product-details.html">
                                            <img src={product1} alt="" />
                                        </a>
                                        <div className="product-badge badge-top badge-right badge-pink">
                                            <span>-10%</span>
                                        </div>
                                        <div className="product-action-wrap">
                                            <button className="product-action-btn-1" title="Wishlist">
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
                                            <button className="product-action-btn-2" title="Add To Cart">
                                                <i className="pe-7s-cart" /> Add to cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3>
                                            <a href="product-details.html">Stylish Swing Chair</a>
                                        </h3>
                                        <div className="product-price">
                                            <span className="old-price">$25.89 </span>
                                            <span className="new-price">$20.25 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HotDeals