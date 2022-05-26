import React , { useRef}  from 'react'

import sliderBg from '../../assets/images/slider/slider-bg-5.jpg';
import slierBg2 from '../../assets/images/slider/slider-bg-5-2.jpg';

import { Swiper , SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Slider() {

    const swiperRef = useRef(null);



    return (
        <div className="slider-area section-padding-2">
            <div className="container-fluid">
                <div className="slider-active swiper-container">
                    <Swiper  
                        ref={swiperRef}
                        loop={true}
                        className='swiper-wrapper'
                    >
                            <SwiperSlide >
                            <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1 slider-overly"
                                style={{
                                    backgroundImage: `url(${sliderBg})`
                                }}
                            >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                                            <div className="slider-content-1 slider-animated-1">
                                                <h3 className="animated">new arrival</h3>
                                                <h1 className="animated">
                                                    Welcome To <br />
                                                    Our Shop
                                                </h1>
                                                <div className="slider-btn btn-hover">
                                                    <a href="product-details.html" className="btn animated">
                                                        Shop Now <i className=" ti-arrow-right " />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                            <div
                                className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1 slider-overly"
                                style={{
                                    backgroundImage: `url(${slierBg2})`
                                }}
                            >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                                            <div className="slider-content-1 slider-animated-1">
                                                <h3 className="animated">new arrival</h3>
                                                <h1 className="animated">
                                                    Welcome To <br />
                                                    Our Shop
                                                </h1>
                                                <div className="slider-btn btn-hover">
                                                    <a href="product-details.html" className="btn animated">
                                                        Shop Now <i className=" ti-arrow-right " />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
             
                        <div className="home-slider-prev2 main-slider-nav2">
                            <i className="fa fa-angle-left" onClick={()=> swiperRef.current.swiper.slidePrev()} />
                        </div>
                        <div className="home-slider-next2 main-slider-nav2">
                            <i className="fa fa-angle-right" onClick={()=> swiperRef.current.swiper.slideNext()} />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Slider