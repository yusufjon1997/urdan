import React from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';
import client from '../../assets/images/testimonial/client-1.png';


function Testimonial() {

    return (
        <div className="testimonial-area pb-100">
            <div className="container">
                <div
                    className="section-title-2 st-border-center text-center mb-75"
                    
                >
                    <h2>Testimonial</h2>
                </div>
                <div className="testimonial-active swiper-container">
                    <Swiper 
                        slidesPerView={3}
                        spaceBetween={30}
                        className='swiper-wrapper'
                    >
                        <SwiperSlide className="swiper-slide">
                            <div
                                className="single-testimonial"
                               
                            >
                                <div className="testimonial-img">
                                    <img src={client} alt="" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore.
                                </p>
                                <div className="testimonial-info">
                                    <h4>Amrita Sha</h4>
                                    <span> Our Client.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide swiper-slide-active">
                            <div
                                className="single-testimonial"
                         
                            >
                                <div className="testimonial-img">
                                    <img src={client} alt="" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore.
                                </p>
                                <div className="testimonial-info">
                                    <h4>Andi Lane</h4>
                                    <span> Designer.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide swiper-slide-active">
                            <div
                                className="single-testimonial"
                         
                            >
                                <div className="testimonial-img">
                                    <img src={client} alt="" />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore.
                                </p>
                                <div className="testimonial-info">
                                    <h4>Ted Ellison</h4>
                                    <span> Developer.</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Testimonial