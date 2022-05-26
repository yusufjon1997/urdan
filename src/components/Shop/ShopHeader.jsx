import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { displayList } from '../../redux/categories/categoryAction';
import { selectDisplayList} from '../../redux/categories/categorySelector';
 
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
                <div className="showing-item">
                    <span>Showing 1–12 of 60 results</span>
                </div>
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