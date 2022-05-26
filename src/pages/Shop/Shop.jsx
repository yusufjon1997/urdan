import React from 'react'
import Bredcrumb from '../../components/Bredcrumb'
import Products from '../../components/Shop/Products'
import ShopHeader from '../../components/Shop/ShopHeader'
import Sidebar from '../../components/Shop/Sidebar'

function Shop() {

    return (
        <div>
            <Bredcrumb pageName="Maxsulotlar" />
            <div className="shop-area shop-page-responsive pt-100 pb-100">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <ShopHeader />
                            <Products />
                        </div>
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop