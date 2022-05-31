import React, { useCallback, useId, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCategories , selectTotalProducts } from '../../redux/products/productsSelector';
import { v4 as id } from 'uuid';

function Sidebar({currentCategory , categoryChangeHandler, searchHandle}) {
    
    const totalProducts = useSelector(selectTotalProducts)
    const categories = useSelector(selectCategories);




    const getNumberOfProducts = useCallback((name) => {
        if(name === "All"){
            return totalProducts.length
        } else {
           const total = totalProducts.filter(product => product.category === name)
            return total.length
        }
    } , [totalProducts , categories]);

    return (
       
        <div className="sidebar-wrapper">
            <div
                className="sidebar-widget mb-40"

            >
                <div className="search-wrap-2">
                    <form className="search-2-form" action="#">
                        <input placeholder="Search*" type="text" onChange={(e) => searchHandle(e)} />
                        <button className="button-search">
                            <i className=" ti-search " />
                        </button>
                    </form>
                </div>
            </div>
            <div
                className="sidebar-widget sidebar-widget-border mb-40 pb-35"

            >
                <div className="sidebar-widget-title mb-30">
                    <h3>Filter By Price</h3>
                </div>
                <div className="price-filter">
                    <div id="slider-range" />
                    <div className="price-slider-amount">
                        <div className="label-input">
                            <label>Price:</label>
                            <input
                                type="text"
                                id="amount"
                                name="price"
                                placeholder="Add Your Price"
                            />
                        </div>
                        <button type="button">Filter</button>
                    </div>
                </div>
            </div>
            <div
                className="sidebar-widget sidebar-widget-border mb-40 pb-35"

            >
                <div className="sidebar-widget-title mb-25">
                    <h3>Product Categories</h3>
                </div>
                <div className="sidebar-list-style">
                    <ul>
                        {
                            categories.map( category => {
                                return <li key={id()}
                                className={category === currentCategory ? 'active-category' : ''}
                                onClick={()=> categoryChangeHandler(category)}
                                >                                 
                                <a >
                                    {category}<span>{getNumberOfProducts(category)}</span>
                                </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar