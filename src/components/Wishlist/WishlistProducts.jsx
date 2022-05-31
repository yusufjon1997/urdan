import React from 'react'
import { useSelector } from 'react-redux'
import { selectWishlist } from '../../redux/wishlist/wishlistSelector'
import WishlistProduct from './WishlistProduct';

function WishlistProducts() {

    const wishlistItems = useSelector(selectWishlist);
    console.log(wishlistItems)
    
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
                                            {
                                                wishlistItems &&
                                                wishlistItems.map(item => {
                                                    return <WishlistProduct product={item} key={item.id} />
                                                })
                                            }
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