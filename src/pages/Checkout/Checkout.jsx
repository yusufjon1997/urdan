import React from 'react'
import Bredcrumb from '../../components/Bredcrumb'
import CheckoutForm from '../../components/Checkout/CheckoutForm'
import CheckoutOrders from '../../components/Checkout/CheckoutOrders'

function Checkout() {
  return (
    <>
    <Bredcrumb pageName="Checkout" />
    <div className="checkout-main-area pb-100 pt-100">
      <div className="container">
        <div className="checkout-wrap pt-30">
          <div className="row">
            <div className="col-lg-7">
              <CheckoutForm />
            </div>
            <div className="col-lg-5">
              <CheckoutOrders />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout