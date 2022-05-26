import React from 'react'

import { Link } from 'react-router-dom';
import bredcrumb1 from '../assets/images/banner/breadcrumb-1.png';
import bredcrumb2 from '../assets/images/banner/breadcrumb-2.png';

function Bredcrumb( { pageName}) {

    return (
        <div className="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <h2>
                        { pageName }
                    </h2>
                    <ul  >
                        <li>
                            <Link to="/" >Bosh sahifa</Link>
                        </li>
                        <li>
                            <i className="ti-angle-right" />
                        </li>
                        <li>{pageName}</li>
                    </ul>
                </div>
            </div>
            <div className="breadcrumb-img-1" >
                <img src={bredcrumb1} alt="" />
            </div>
            <div className="breadcrumb-img-2">
                <img src={bredcrumb2} alt="" />
            </div>
        </div>

    )
}

export default Bredcrumb