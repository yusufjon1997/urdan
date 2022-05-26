import React from 'react'
import Logo from '../../components/Header/Logo';
import Navbar from '../../components/Header/Navbar';
import HeaderAction from '../../components/Header/HeaderAction';

import logo from '../../assets/images/logo/logo.png';

function Header() {
    
    return (
        <header className="header-area header-responsive-padding header-height-1">
            <div className="header-bottom sticky-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-6">
                            <Logo logo={logo} />
                        </div>
                        <div className="col-lg-6 d-none d-lg-block d-flex justify-content-center">
                            <div className="main-menu text-center">
                                <Navbar />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <HeaderAction />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;