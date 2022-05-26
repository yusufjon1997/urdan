import React from 'react'
import bg from '../../assets/images/bg/bg-4.png';
import client from '../../assets/images/icon-img/client.png';
import award from '../../assets/images/icon-img/award.png';
import item from '../../assets/images/icon-img/item.png';
import cup from '../../assets/images/icon-img/cup.png';

function FunFact() {
    return (
        <div
            className="funfact-area bg-img pt-100 pb-70"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div
                            className="single-funfact text-center mb-30"
                           
                        >
                            <div className="funfact-img">
                                <img src={client} alt="" />
                            </div>
                            <h2 className="count">120</h2>
                            <span>Happy Clients</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div
                            className="single-funfact text-center mb-30"
                            
                        >
                            <div className="funfact-img">
                                <img src={award} alt="" />
                            </div>
                            <h2 className="count">90</h2>
                            <span>Award Winning</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div
                            className="single-funfact text-center mb-30"
                    
                        >
                            <div className="funfact-img">
                                <img src={item} alt="" />
                            </div>
                            <h2 className="count">230</h2>
                            <span>Totel Items</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div
                            className="single-funfact text-center mb-30 mrgn-none"
                          
                        >
                            <div className="funfact-img">
                                <img src={cup} alt="" />
                            </div>
                            <h2 className="count">350</h2>
                            <span>Cups of Coffee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FunFact