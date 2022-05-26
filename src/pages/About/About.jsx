import React from 'react'
import AboutUs from '../../components/About/AboutUs'
import FunFact from '../../components/About/FunFact'
import Testimonial from '../../components/About/Testimonial'
import Bredcrumb from '../../components/Bredcrumb'

function About() {
  return (
    <div>
        <Bredcrumb pageName="About Us"/>
        <AboutUs />
        <FunFact />
        <Testimonial />
    </div>
  )
}

export default About