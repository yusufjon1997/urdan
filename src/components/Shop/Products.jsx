import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product';
import { selectDisplayList, selectCurrentPage } from '../../redux/products/productsSelector';
import { setCurrentPage } from '../../redux/products/productsAction';
import Pagination from '../Pagination';
import { paginate } from '../../utilities/paginate';
import ModalProduct from '../ModalProduct';


function Products({ filter }) {

    const dispatch = useDispatch();

    

    // for displaying list style 
    const isDisplayList = useSelector(selectDisplayList);
    const products = useSelector(state => state.products.products);
    const filteredproducts = useSelector(state => state.products.filteredProducts);
    // Pagination 
    const currentPage = useSelector(selectCurrentPage);
    const perPage = 3;

    const currentProducts = paginate(products, currentPage, perPage);
    const filteredCurrentProducts = paginate(filteredproducts, currentPage, perPage);

    const previousClickHandler = () => {
        dispatch(setCurrentPage(currentPage - 1));
    };

    const nextClickHandler = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const pageChangeHandler = (page) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <>
            <div className="shop-bottom-area">
                <div className="tab-content jump">

                    {
                        filter ?
                            <div>
                                <div id="shop-1" className={`tab-pane ${!isDisplayList && 'active'}`}>
                                    <div className="row">
                                        {
                                            filteredCurrentProducts.map(product => {
                                                return <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <Product key={product.id} product={product} />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="shop-2" className={`tab-pane ${isDisplayList && 'active'}`}>

                                    {
                                        filteredCurrentProducts.map(product => {
                                            return <div key={product.id}>
                                                <Product key={product.id} product={product} />
                                            </div>
                                        })
                                    }
                                </div>
                                <Pagination
                                    currentPage={currentPage}
                                    postsPerPage={perPage}
                                    noOfPosts={filteredproducts}
                                    onPreviousClick={previousClickHandler}
                                    onNextClick={nextClickHandler}
                                    onPageChange={pageChangeHandler}

                                />
                            </div>
                            :
                            <div>
                                <div id="shop-1" className={`tab-pane ${!isDisplayList && 'active'}`}>
                                    <div className="row">
                                        {
                                            currentProducts.map(product => {
                                                return <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <Product key={product.id} product={product} />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="shop-2" className={`tab-pane ${isDisplayList && 'active'}`}>

                                    {
                                        currentProducts.map(product => {
                                            return <div key={product.id}>
                                                <Product key={product.id} product={product} />
                                            </div>
                                        })
                                    }
                                </div>
                                <Pagination
                                    currentPage={currentPage}
                                    postsPerPage={perPage}
                                    noOfPosts={products}
                                    onPreviousClick={previousClickHandler}
                                    onNextClick={nextClickHandler}
                                    onPageChange={pageChangeHandler}
                                />
                            </div>

                    }

                </div>
            </div>

            <ModalProduct />
        </>
    )
}

export default Products