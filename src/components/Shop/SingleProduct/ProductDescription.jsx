import React from 'react'

function ProductDescription() {
    
    return (
        <div className="description-review-area pb-85">
            <div className="container">
                <div
                    className="description-review-topbar nav"
               
                >
                    <a className="active" data-bs-toggle="tab" href="#des-details1">
                        {" "}
                        Description{" "}
                    </a>
                    <a data-bs-toggle="tab" href="#des-details2" className="">
                        {" "}
                        Information{" "}
                    </a>
                    <a data-bs-toggle="tab" href="#des-details3" className="">
                        {" "}
                        Reviews{" "}
                    </a>
                </div>
                <div className="tab-content">
                    <div id="des-details1" className="tab-pane active">
                        <div className="product-description-content text-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercita ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.{" "}
                            </p>
                            <p >
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum. Sed ut per unde omnis
                                iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                            </p>
                        </div>
                    </div>
                    <div id="des-details2" className="tab-pane">
                        <div className="specification-wrap table-responsive">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="width1">Brands</td>
                                        <td>Airi, Brand, Draven, Skudmart, Yena</td>
                                    </tr>
                                    <tr>
                                        <td className="width1">Color</td>
                                        <td>Blue, Gray, Pink</td>
                                    </tr>
                                    <tr>
                                        <td className="width1">Size</td>
                                        <td>L, M, S, XL, XXL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="des-details3" className="tab-pane">
                        <div className="review-wrapper">
                            <h3>1 review for Sleeve Button Cowl Neck</h3>
                            <div className="single-review">
                                <div className="review-img">
                                    <img src="assets/images/product-details/review-1.png" alt="" />
                                </div>
                                <div className="review-content">
                                    <div className="review-rating">
                                        <a href="#">
                                            <i className="ti-star" />
                                        </a>
                                        <a href="#">
                                            <i className="ti-star" />
                                        </a>
                                        <a href="#">
                                            <i className="ti-star" />
                                        </a>
                                        <a href="#">
                                            <i className="ti-star" />
                                        </a>
                                        <a href="#">
                                            <i className="ti-star" />
                                        </a>
                                    </div>
                                    <h5>
                                        <span>HasTech</span> - April 29, 2020
                                    </h5>
                                    <p>
                                        Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
                                        egestas magna molestie a. Proin ac ex maximus, ultrices justo
                                        eget, sodales orci. Aliquam egestas libero ac turpis pharetra,
                                        in vehicula lacus scelerisque
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="ratting-form-wrapper">
                            <h3>Add a Review</h3>
                            <p>
                                Your email address will not be published. Required fields are marked{" "}
                                <span>*</span>
                            </p>
                            <div className="your-rating-wrap">
                                <span>Your rating</span>
                                <div className="your-rating">
                                    <a href="#">
                                        <i className="ti-star" />
                                    </a>
                                    <a href="#">
                                        <i className="ti-star" />
                                    </a>
                                    <a href="#">
                                        <i className="ti-star" />
                                    </a>
                                    <a href="#">
                                        <i className="ti-star" />
                                    </a>
                                    <a href="#">
                                        <i className="ti-star" />
                                    </a>
                                </div>
                            </div>
                            <div className="ratting-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="rating-form-style mb-15">
                                                <label>
                                                    Name <span>*</span>
                                                </label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="rating-form-style mb-15">
                                                <label>
                                                    Email <span>*</span>
                                                </label>
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="rating-form-style mb-15">
                                                <label>
                                                    Your review <span>*</span>
                                                </label>
                                                <textarea name="Your Review" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="save-email-option">
                                                <p>
                                                    <input type="checkbox" />{" "}
                                                    <label>
                                                        Save my name, email, and website in this browser for the
                                                        next time I comment.
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-submit">
                                                <input type="submit" defaultValue="Submit" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDescription