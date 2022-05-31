import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { displayList } from '../../redux/products/productsAction';
import { selectDisplayList} from '../../redux/products/productsSelector';
 
function ShopHeader() {

    const dispatch = useDispatch();

    const isDisplayList = useSelector(selectDisplayList);

    const viewListStyle = () => {
        dispatch(displayList(true))
    }
    const viewGridStyle = () => {
        dispatch(displayList(false))
    }



 
    return (
        <div className="shop-topbar-wrapper mb-40">
            <div
                className="shop-topbar-left"
            >
            </div>
            <div
                className="shop-topbar-right"

            >
                <div className="shop-sorting-area">
                    <select className="nice-select nice-select-style-1">
                        <option>Default Sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by latest</option>
                    </select>
                </div>
                <div className="shop-view-mode nav">
                    <a className={`${!isDisplayList && 'active'}`} onClick={viewGridStyle}>
                        <i className=" ti-layout-grid3" />
                    </a>
                    <a className={`${isDisplayList && 'active'}`} onClick={viewListStyle}>
                        <i className=" ti-view-list-alt " />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ShopHeader