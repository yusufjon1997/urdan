import React from 'react'
import Bredcrumb from '../../components/Bredcrumb'
import Address from '../../components/Contact/Address'
import ContactForm from '../../components/Contact/ContactForm'
import Map from '../../components/Contact/Map'


function Contact() {
  return (
    <div>
        <Bredcrumb pageName="Contact Us" />
        <Address />
        <Map />
        <ContactForm />
    </div>
  )
}

export default Contact