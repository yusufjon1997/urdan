import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product';
import { fetchCategoriesAsync } from '../../redux/categories/categoryAction';
import { selectDisplayList } from '../../redux/categories/categorySelector';

function Products() {

    // for displaying list style 
    const isDisplayList = useSelector(selectDisplayList);


    const products = useSelector(state => state.categories.categoriesMap);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (    
        <>
            <div className="shop-bottom-area">
                <div className="tab-content jump">
                    <div id="shop-1" className={`tab-pane ${!isDisplayList && 'active' }`}>
                        <div className="row">
                                {
                                    products.map(product => {
                                        return <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-12">
                                        <Product key={product.id} product={product} />
                                        </div>
                                    })
                                }
                        </div>
                    </div>

                    <div id="shop-2" className={`tab-pane ${isDisplayList && 'active' }`}>

                    {
                                    products.map(product => {
                                        return <div key={product.id}>
                                        <Product key={product.id} product={product} />
                                        </div>
                                    })
                                }
                    </div>
                    <div className="pagination-style-1">
                            <ul>
                                <li>
                                    <a className="active" href="#">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a className="next" href="#">
                                        <i className=" ti-angle-double-right " />
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Products