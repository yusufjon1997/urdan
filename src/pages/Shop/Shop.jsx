import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductsAsync , setCurrentPage , filterByCategory , searchProduct } from '../../redux/products/productsAction'

import Bredcrumb from '../../components/Bredcrumb'
import Products from '../../components/Shop/Products'
import ShopHeader from '../../components/Shop/ShopHeader'
import Sidebar from '../../components/Shop/Sidebar'


function Shop() {

    const dispatch = useDispatch();
    const [filter, setFilter] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("All");


    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, []);

    const categoryChangeHandler = (category) => {
        setCurrentCategory(category);
        dispatch(setCurrentPage(1));
        if (category === "All") {
            setFilter(false);
        } else {
            dispatch(filterByCategory(category));
            setFilter(true);
        }
    };

    const searchHandle = (e) => {

        if (e.target.value === "") {
            setCurrentCategory("All")
            setFilter(false);

        } else {
            setCurrentCategory("");
            dispatch(setCurrentPage(1));
            setFilter(true)
            dispatch(searchProduct(e.target.value))
        }
    }



    return (
        <div>
            <Bredcrumb pageName="Products" />
            <div className="shop-area shop-page-responsive pt-100 pb-100">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <ShopHeader/>
                            <Products filter={filter} />
                        </div>
                        <div className="col-lg-3">
                            <Sidebar currentCategory={currentCategory} categoryChangeHandler={categoryChangeHandler} searchHandle={searchHandle} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop