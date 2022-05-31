import React from 'react'
import Bredcrumb from '../../components/Bredcrumb'
import WishlistProducts from '../../components/Wishlist/WishlistProducts'

function Wishlist() {
  return (
    <div>
        <Bredcrumb pageName="Sevimlilar" />
        <WishlistProducts />
    </div>
  )
}

export default Wishlist