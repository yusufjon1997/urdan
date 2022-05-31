import React from 'react'
import banner1 from '../../assets/images/banner/banner-20.png';
import banner2 from '../../assets/images/banner/banner-21.png';
import banner3 from '../../assets/images/banner/banner-22.png';
import { Link } from 'react-router-dom'



function Banner() {
    return (
        <div className="banner-area section-padding-2 pt-30 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="banner-wrap mb-30"
                        >
                            <Link to="/shop">
                                <img src={banner1} alt="" />
                            </Link>
                            <div className="banner-content-11">
                                <span>- 10% OFF</span>
                                <h3>Chair &amp; Plant</h3>
                                <h4>Urdan Collection</h4>
                                <div className="btn-style-6 btn-hover">
                                    <Link to="/shop" className="btn theme-color">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="banner-wrap mb-30"
           
                        >
                            <Link to="/shop">
                                <img src={banner2} alt="" />
                            </Link>
                            <div className="banner-content-11">
                                <span>- 20% OFF</span>
                                <h3>Bd Sofa Sat</h3>
                                <h4>Office Collection</h4>
                                <div className="btn-style-6 btn-hover">
                                    <Link to="/shop" className="btn theme-color">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div
                            className="banner-wrap mb-30"
                        >
                            <Link to="/shop">
                                <img src={banner3} alt="" />
                            </Link>
                            <div className="banner-content-11">
                                <span>- 30% OFF</span>
                                <h3>Hanging Light</h3>
                                <h4>Urdan Collection</h4>
                                <div className="btn-style-6 btn-hover">
                                    <Link to="/shop" className="btn theme-color">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner