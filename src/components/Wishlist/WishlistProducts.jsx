import React from 'react'

function WishlistProducts() {
    return (
        <div className="wishlist-area pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="wishlist-table-content">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="width-remove" />
                                                <th className="width-thumbnail" />
                                                <th className="width-name">Product</th>
                                                <th className="width-price"> Unit price </th>
                                                <th className="width-stock-status"> Stock status </th>
                                                <th className="width-wishlist-cart" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-remove">
                                                    <a href="#">×</a>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/cart/cart-1.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <h5>
                                                        <a href="product-details.html">Stylish Swing Chair</a>
                                                    </h5>
                                                </td>
                                                <td className="product-wishlist-price">
                                                    <span className="amount">$120.00</span>
                                                </td>
                                                <td className="stock-status">
                                                    <span>
                                                        <i className="las la-check" /> In Stock
                                                    </span>
                                                </td>
                                                <td className="wishlist-cart btn-hover">
                                                    <a href="#">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove">
                                                    <a href="#">×</a>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/cart/cart-2.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <h5>
                                                        <a href="product-details.html">Modern Lounge Chairs</a>
                                                    </h5>
                                                </td>
                                                <td className="product-wishlist-price">
                                                    <span className="amount">$120.00</span>
                                                </td>
                                                <td className="stock-status">
                                                    <span>
                                                        <i className="las la-check" /> In Stock
                                                    </span>
                                                </td>
                                                <td className="wishlist-cart btn-hover">
                                                    <a href="#">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove">
                                                    <a href="#">×</a>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <a href="product-details.html">
                                                        <img src="assets/images/cart/cart-3.jpg" alt="" />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <h5>
                                                        <a href="product-details.html">Modern Swivel Chair</a>
                                                    </h5>
                                                </td>
                                                <td className="product-wishlist-price">
                                                    <span className="amount">$120.00</span>
                                                </td>
                                                <td className="stock-status">
                                                    <span>
                                                        <i className="las la-check" /> In Stock
                                                    </span>
                                                </td>
                                                <td className="wishlist-cart btn-hover">
                                                    <a href="#">Add to Cart</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WishlistProducts