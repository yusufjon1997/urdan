import React, { useId } from 'react'
import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/categories/categorySelector';

function Sidebar() {
    
    const categories = useSelector(selectCategories);
    const id = useId();

    return (
       
        <div className="sidebar-wrapper">
            <div
                className="sidebar-widget mb-40"

            >
                <div className="search-wrap-2">
                    <form className="search-2-form" action="#">
                        <input placeholder="Search*" type="text" />
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
                                return <li key={id}> <a href="shop.html"> {category} <span>4</span></a>
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