import React from 'react'

import brand1 from '../../assets/images/brand-logo/brand-logo-1.png';
import brand2 from '../../assets/images/brand-logo/brand-logo-2.png';
import brand3 from '../../assets/images/brand-logo/brand-logo-3.png';
import brand4 from '../../assets/images/brand-logo/brand-logo-4.png';
import brand5 from '../../assets/images/brand-logo/brand-logo-5.png';

import { Swiper , SwiperSlide } from 'swiper/react';



function Brands() {
    return (
        <div className="brand-logo-area pb-95">
            <div className="container">
                <div className="brand-logo-active swiper-container">
                    <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    className="swiper-wrapper"
                    >
                        <SwiperSlide className="swiper-slide">
                            <div className="single-brand-logo">
                                <a href="#">
                                    <img src={brand1} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide  className="swiper-slide">
                            <div className="single-brand-logo">
                                <a href="#">
                                    <img src={brand2} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="single-brand-logo">
                                <a href="#">
                                    <img src={brand3} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide  className="swiper-slide">
                            <div className="single-brand-logo">
                                <a href="#">
                                    <img src={brand4} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide  className="swiper-slide">
                            <div className="single-brand-logo">
                                <a href="#">
                                    <img src={brand5} alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide  className="swiper-slide">
                            <div className="single-brand-logo">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-logo-1.png" alt="" />
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Brands