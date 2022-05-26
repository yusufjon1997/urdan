import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../../assets/images/banner/about-us.png';


function AboutUs() {
    return (
        <div className="about-us-area pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-content text-center">
                            <h2 >
                                Furniture
                            </h2>
                            <h1 >
                                Best Furniture
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad
                                minim venia quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit
                            </p>
                            <p className="mrg-inc" >
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                            <div
                                className="btn-style-3 btn-hover"
                          
                            >
                                <Link className="btn border-radius-none" to="/shop">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img" >
                            <img src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs