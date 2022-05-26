import React from 'react'

import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Bosh sahifa</Link>
                </li>
                <li>
                    <Link to="/shop">Maxsulotlar</Link>
                </li>
                <li>
                    <Link to="/about">Biz haqimizda</Link>
                </li>
                <li>
                    <Link to="/contact">Bizga bog'laning</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar