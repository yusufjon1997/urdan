import React from 'react'
import {useFormik} from 'formik';
import { validationSchema } from '../../validations/checkoutFormValidation';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toast} from 'react-toastify';
import { useSelector } from 'react-redux';

const initialValues = {
    firstName : "",
    lastName : "",
    companyName : "",
    country : "",
    streetName : "" ,
    apartment : "",
    city : "",
    region : "",
    postcode : "",
    phoneNumber : "",
    emailAddress : "",
    orderNotes : ""
}

const onSubmit = ( values ) => {
    toast.success('Order has been sent')
    // alert(values.firstName)
}

function CheckoutForm() {
    
    const cartItems = useSelector(selectCartItems)


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    
    
    return (
        <form id="checkout-form" className="billing-info-wrap" onSubmit={formik.handleSubmit}>
            <h3>Billing Details</h3>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                        <label className='d-flex justify-content-between'>
                            First Name
                            <abbr className="required" title="required">
                                { formik.touched.firstName && formik.errors.firstName ? 
                                    <>{formik.errors.firstName}</> : null}
                            </abbr>
                        </label>
                        <input type="text" 
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            name="firstName"

                            />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Last Name
                            <abbr className="required" title="required">
                                { formik.touched.lastName && formik.errors.lastName ? 
                                    <>{formik.errors.lastName}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            name="lastName"
                            />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Company Name
                            <abbr className="required" title="required">
                                { formik.touched.companyName && formik.errors.companyName ? 
                                    <>{formik.errors.companyName}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.companyName} 
                            name="companyName"
                            />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Country
                            <abbr className="required" title="required">
                                { formik.touched.country && formik.errors.country ? 
                                    <>{formik.errors.country}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                            name="country"
                            />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Street Name
                            <abbr className="required" title="required">
                                { formik.touched.streetName && formik.errors.streetName ? 
                                    <>{formik.errors.streetName}</> : null}
                            </abbr>
                    </label>
                        <input
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                            name="streetName"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.streetName}
                        />
                        <input
                            placeholder="Apartment, suite, unit etc."
                            type="text"
                            name="apartment"
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.apartment}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Town / City
                            <abbr className="required" title="required">
                                { formik.touched.city && formik.errors.city ? 
                                    <>{formik.errors.city}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.city} 
                            name="city"
                            />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            State / Region
                            <abbr className="required" title="required">
                                { formik.touched.region && formik.errors.region? 
                                    <>{formik.errors.region}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}  
                            value={formik.values.region}
                            name="region"
                            />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Postcode / Zip
                            <abbr className="required" title="required">
                                { formik.touched.postcode && formik.errors.postcode ? 
                                    <>{formik.errors.postcode}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.postcode}
                            name="postcode"
                            />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Phone Number
                            <abbr className="required" title="required">
                                { formik.touched.phoneNumber && formik.errors.phoneNumber ? 
                                    <>{formik.errors.phoneNumber}</> : null}
                            </abbr>
                    </label>
                        <input type="text" 
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            name="phoneNumber"
                            />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="billing-info mb-20">
                    <label className='d-flex justify-content-between'>
                            Email Address
                            <abbr className="required" title="required">
                                { formik.touched.emailAddress && formik.errors.emailAddress ? 
                                    <>{formik.errors.emailAddress}</> : null}
                            </abbr>
                    </label>
                        <input type="text"  
                            onChange={formik.handleChange}  
                            onBlur={formik.handleBlur}
                            value={formik.values.emailAddress} 
                            name="emailAddress"
                            />
                    </div>
                </div>
            </div>
            <div className="additional-info-wrap">
                <label>Order notes</label>
                <textarea
                    placeholder="Notes about your order, e.g. special notes for delivery. "
                    name="orderNotes"
                    onChange={formik.handleChange}  
                    onBlur={formik.handleBlur}
                    value={formik.values.orderNotes}
                />
            </div>
        </form>
    )
}

export default CheckoutForm